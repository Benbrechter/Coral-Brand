const { User } = require('../models/index');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mysecretssshhhhhhh';
const expiration = '2h';

exports.createUser = async (req, res) => {
    try {
        // Validate required fields
        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Create new user
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password, // Password will be hashed in the model
        });

        // Create token
        const token = jwt.sign(
            { 
                id: dbUserData._id,
                email: dbUserData.email,
                username: dbUserData.username
            },
            secret,
            { expiresIn: expiration }
        );

        res.status(200).json({
            success: true,
            token,
            user: {
                id: dbUserData._id,
                username: dbUserData.username,
                email: dbUserData.email
            },
            message: 'User created successfully'
        });

    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: err.message
        });
    }
};

exports.getAllUsers = async (req,res) => {
    try{
        const user = await User.find()
        res.json(user)
    }catch(error){
        res.status(500).json(error)
    }
};

exports.login = async (req, res) => {
    try {
        // Validate required fields
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user
        const dbUserData = await User.findOne({ email: req.body.email });
        if (!dbUserData) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        // Create token
        const token = jwt.sign(
            {
                id: dbUserData._id,
                email: dbUserData.email,
                username: dbUserData.username
            },
            secret,
            { expiresIn: expiration }
        );

        res.status(200).json({
            success: true,
            token,
            user: {
                id: dbUserData._id,
                username: dbUserData.username,
                email: dbUserData.email
            },
            message: 'You are now logged in!'
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({
            success: false,
            message: 'Error during login',
            error: err.message
        });
    }
};

exports.logout = (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
};