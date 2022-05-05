const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));
app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', (req, res) => {
    return res.status(200).json({hola: 'mundo'});
});

app.get('/test', (req, res, next) => {
    res.render('test', {
        name: "Alan"
    });
});

app.listen(5151);