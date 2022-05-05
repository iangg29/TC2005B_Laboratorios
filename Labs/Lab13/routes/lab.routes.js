const express = require('express');
const path = require('path');
const labController = require(path.join(__dirname, '..', 'controllers', 'lab.controller.js'));
const router = express.Router();

router.get('/', labController.main);

module.exports = router;