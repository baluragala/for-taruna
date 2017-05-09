const fs = require('fs');
const readableStream = fs.createReadStream('calculator');
const writeableStream = fs.createWriteStream('calculatorcopy');
readableStream.pipe(writeableStream);