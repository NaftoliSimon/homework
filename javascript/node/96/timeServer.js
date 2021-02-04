'use strict'
const net = require('net');

function getDateDisplay() {

    let date = new Date();

    let year = date.getFullYear();
    let month =  ensure2digits(date.getMonth() + 1); 
    let day =  ensure2digits(date.getDate()); 
    let hours = ensure2digits(date.getHours());
    let minutes = ensure2digits(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}\n`;
}

function ensure2digits(dateElem) {
    let dateElemStr = '' + dateElem
    if (dateElemStr.length === 1) {
        dateElemStr = '0' + dateElemStr;
    }
    return dateElemStr;
}

const server = net.createServer(function (socket) {
    socket.end(getDateDisplay());
});
server.listen(process.argv[2])
