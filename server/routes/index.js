const express = require("express");
const path = require("path");
const AuthController = require('../controllers/AuthController')
const UsersController = require('../controllers/UsersController')
const ModelController = require('../controllers/ModelController')

const router = express.Router();

// routes
router.get('/connect', AuthController.Connect);  // -> return jwttoken

router.post('/users/', UsersController.createNew);  // - create a new user

router.get('/users/me', UsersController.getMe);  // get the user associated with jwttoken

router.post('/generate-commit-msg', ModelController.generateCommitMsg);  // generate a commit message

router.post('/fine-tune-model', ModelController.tuneModel)  // fine tunend a gemini flash model

// routes for HTML Pages
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});
module.exports = router;