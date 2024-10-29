const { User } = require('../models/index');

exports.createUser = async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        res.status(500).json(err);
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
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res.status(400).json({ message: 'Incorrect email or password :(' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password :(' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log(req.session.cookie);
            req.session.user_id = dbUserData.id;

            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(500).json(err);
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