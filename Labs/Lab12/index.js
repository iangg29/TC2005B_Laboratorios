const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));
app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', (_, res) => {
    res.render('landing', { name: 'Ian García'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});