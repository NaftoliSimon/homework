const fs = require('fs');
fs.readFile(process.argv[2], function callback(err, buf) {
    if (err) {
        return console.log(err)
      }
    console.log(buf.toString().split('\n').length - 1);
  })

