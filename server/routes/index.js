const express = require("express");
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

module.exports = router;