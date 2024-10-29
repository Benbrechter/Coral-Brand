const router = require('express').Router();
const userController = require('../controllers/userController');

// Register new user
router.post('/', userController.createUser);

// Login user
router.post('/login', userController.login);

// Logout user
router.post('/logout', userController.logout);

// get all users
router.get('/users', userController.getAllUsers);

module.exports = router;