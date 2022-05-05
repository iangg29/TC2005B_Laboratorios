const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();
const port = process.env.PORT || 3000;

const indexFile = fs.readFileSync('./public/index.html');
const cardsFile = fs.readFileSync('./public/cards.html');

server.on('request', (req, res) => {
    switch (req.url) {
        case '/':
            if (req.method === "GET"){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(indexFile);
            } else if (req.method === "POST"){
                const data = [];
                req.on('data', (chunk) => {
                    data.push(chunk);
                });
                return req.on('end', () => {
                    const parsedData = Buffer.concat(data).toString();
                    console.log(parsedData);
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(parsedData);
                    return res.end(indexFile);
                });
            }
            break;
        case '/data':
            fs.createReadStream('./public/data.json').pipe(res);
            break;
        case '/cards':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(cardsFile);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>Error 404: Ruta no encontrada.</h1>');
            break;
    }
});

server.listen(port, 'localhost', () => {
    console.log(`Server running at http://localhost:${port}/`);
});