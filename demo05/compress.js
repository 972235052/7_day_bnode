var fs = require('fs');

var zlib = require('zlib');

fs.createReadStream('test.js')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('test.js.gz'));

console.log('OK')