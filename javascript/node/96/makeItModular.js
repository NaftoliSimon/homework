const myMod = require('./myModule.js');

function callback(err, selectedExtList) {
    if (err) {
        return console.error(err)
    }
    selectedExtList.forEach(file => {
        console.log(file);
    });
}

myMod(process.argv[2], process.argv[3], callback);