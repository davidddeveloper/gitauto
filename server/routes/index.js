const express = require("express");
const AuthController = require('../controllers/AuthController')
const UsersController = require('../controllers/UsersController')
const ModelController = require('../controllers/ModelController')

const router = express.Router();

// routes
router.get('/connect', AuthController.Connect);

router.post('/users/', UsersController.createNew);

router.get('/users/me', UsersController.getMe);

router.post('/generate-commit-msg', ModelController.generateCommitMsg);

router.post('/fine-tune-model', ModelController.tuneModel)

module.exports = router;