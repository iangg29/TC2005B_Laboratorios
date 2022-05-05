const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'jaflsdjñflksfsañapgosrgndrgdvsenuvnjusehañwd', 
    resave: false,
    saveUninitialized: false,
}));

app.use('/', require(path.join(__dirname, 'routes', 'app.route')));
app.use('/auth', require(path.join(__dirname, 'routes', 'auth.route')));

app.use((_, res) => {
    res.status(404).send('404');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});