const fs = require('fs');
const path = require('path');

module.exports = function (dirName, ext, callback) {

    fs.readdir(dirName, function (err, list) {
        if (err) {
            return callback(err);
        }
        const selectedExtList = list.filter(file => path.extname(file) === '.' + ext)
        callback(null, selectedExtList)
    });
}
