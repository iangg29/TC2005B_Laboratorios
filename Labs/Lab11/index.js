const express = require('express');
const PORT = 3000 || process.env.PORT;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const indexRoutes = require('./index.routes');

app.use('/', indexRoutes);

app.use((_, res) => {
    res.status(404).send('Sorry cant find that!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});