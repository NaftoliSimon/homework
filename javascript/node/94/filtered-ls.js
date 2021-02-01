const fs = require('fs');
const path = require('path');

const pathName = process.argv[2];
const fileExtention = `.${process.argv[3]}`;

fs.readdir(pathName, callback);

function callback(err, list) {
    if (err) {
        return console.error(err)
    }
    const selectedExtList = list.filter(file => path.extname(file) === fileExtention)
    selectedExtList.forEach(file => {
        console.log(file);
    });
}
