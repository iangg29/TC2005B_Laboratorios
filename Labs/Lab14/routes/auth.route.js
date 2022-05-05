const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require(path.join(__dirname, '..', 'controllers', 'user.controller'));

router.get('/login', usersController.getAuthLogin);
router.post('/login', usersController.login);
router.get('/logout', usersController.logout);

module.exports = router;