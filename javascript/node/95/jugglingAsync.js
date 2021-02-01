'use strict'

const http = require('http');

let dataString = '';
let index = 2;
const arrLength = process.argv.length;
const lastIndex = arrLength - 1;


for(let i = 2; i < arrLength; i++) {
    let url = process.argv[i];
    //console.log('url:', url);
    http.get(url, callback)
}
function callback(response) {
    response.setEncoding('utf8');
    response.on('data', data => dataString += data);
    response.on('error', err => console.log('error:', err));
    response.on('end', () => {
        dataString += '\n';
        if(index === lastIndex) {
            console.log(dataString);
        }
        index++;
    });
}


//NOT FINISHED YET