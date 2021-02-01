'use strict'

const http = require('http');

const url = process.argv[2];
let dataString = '';

http.get(url, callback)

function callback(response) {
    response.setEncoding('utf8');
    response.on('data', data => dataString += data);
    response.on('error', err => console.log('error:', err));
    response.on('end', () => {
        console.log(dataString.split('').length);
        console.log(dataString);
    });
}