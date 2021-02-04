'use strict'

const http = require('http');
const fs = require('fs');

const port = +process.argv[2];
const fileLoc = process.argv[3];

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(fileLoc).pipe(res)
})
server.listen(port);
