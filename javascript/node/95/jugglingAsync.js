'use strict'

const http = require('http');

const arrLength = process.argv.length;
const finalIndex = arrLength - 1;
let results = [];
let index = 2;

for(let i = index; i < arrLength; i++) {
    let url = process.argv[i];
    http.get(url, function (response) {
        let dataString = '';
        response.setEncoding('utf8');
        response.on('data', data => dataString += data);
        response.on('error', err => console.error(err));
        response.on('end', () => {
            results[i] = dataString; //slots 0 & 1 of the array are empty.   [i-2] to change 
            if(index === finalIndex) {
               results.forEach(data => console.log(data));
            }
            index++;
        });
    })
}