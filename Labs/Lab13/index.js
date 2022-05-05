const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

const labRoutes = require(path.join(__dirname, 'routes', 'lab.routes.js'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', labRoutes);

app.use((_, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});