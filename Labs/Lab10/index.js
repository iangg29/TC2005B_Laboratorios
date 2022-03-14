const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 8989;

const app = express();

app.enable('trust proxy');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

const horseRoutes = require('./routes/horses');

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Service available."
    });
});

app.use('/horses', horseRoutes);

app.get('/alan', (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        success: true,
        data: req.body
    });
});

app.listen(PORT, () => {
    console.log(`[STATUS] Server listening on port: ${PORT}`);
});