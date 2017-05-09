var logger = require('./logger').logger;
var calc = require('./calculator');
logger.info(__filename, 'Calculator program is running', [1,2]);
console.log(calc.add(1, 2));
