const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

router.get('/cards', (_, res) => {
    res.sendFile(`${__dirname}/public/cards.html`);
});

router.get('/route', (req, res) => {
    res.status(200).send(req.headers);
});

module.exports = router;