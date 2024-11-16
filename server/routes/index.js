const express = require("express");
const path = require("path");
const AuthController = require('../controllers/AuthController');
const UsersController = require('../controllers/UsersController');
const ModelController = require('../controllers/ModelController');
const redirectIfLoggedIn = require('../helpers/redirectIfLoggedIn');
const requireAuth = require('../helpers/requireAuth');

const router = express.Router();

// routes
router.get('/connect', AuthController.Connect);  // -> return jwttoken

router.post('/users/', UsersController.createNew);  // - create a new user

router.get('/users/me', UsersController.getMe);  // get the user associated with jwttoken

router.post('/generate-commit-msg', ModelController.generateCommitMsg);  // generate a commit message

router.post('/fine-tune-model', ModelController.tuneModel)  // fine tunend a gemini flash model

router.get('/logout', AuthController.logout);  // destorys the session

// routes for HTML Pages
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'));
});

router.get('/register', redirectIfLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'));
});

router.get('/login', redirectIfLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

router.get('/how-to-use', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'how-to-use.html'));
});

module.exports = router;