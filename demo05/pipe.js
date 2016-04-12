var fs = require('fs');

var readStream = fs.createReadStream('test.js');

var writeStream = fs.createWriteStream('test1.js');

//g管道都写操作

readStream.pipe(writeStream)

console.log('OK');