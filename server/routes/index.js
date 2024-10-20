const express = require("express");
const AuthController = require('../controllers/AuthController')
const UsersController = require('../controllers/UsersController')

const router = express.Router();

// routes
router.get('/connect', AuthController.Connect);

router.post('/users/', UsersController.createNew);

router.get('/users/me', UsersController.getMe);

module.exports = router;