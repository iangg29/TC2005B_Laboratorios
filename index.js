let express = require('express');
let app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/dist/assets/css'));
app.use('/js', express.static(__dirname + '/dist/assets/js'));

let server = app.listen(PORT, () => {
    console.log("[STATUS] Server running on port ", PORT);
});