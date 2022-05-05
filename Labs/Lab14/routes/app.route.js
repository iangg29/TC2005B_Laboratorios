const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('index', {
        user: req.session.user
    });
})

module.exports = router;