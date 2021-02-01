const http = require('http');

const url = process.argv[2];

http.get(url, callback)

function callback(response) {
    response.setEncoding('utf8');
    response.on('data', data => console.log(data));
    response.on('error', err => console.log('error:', err));
    response.on('end', () => null);
}