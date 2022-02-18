let express = require('express');
let app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

let server = app.listen(PORT, () => {
    console.log("[STATUS] Server running on port ", PORT);
});