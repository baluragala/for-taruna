/**
 * Created by moksha on 07/05/17.
 */

var chalk = require('chalk');

var info = function (source, message, params) {
	if(arguments.length != 3)
		throw new Error('Invalid number of arguments');

	var logMessage = '';
	if (source !== undefined)
		logMessage = ' Source : ' + source;
	if (message !== undefined)
		logMessage += ' Message : ' + message;
	if (params !== undefined)
		logMessage += ' Params : ' + JSON.stringify(params);

	console.log(chalk.green(logMessage));
};

exports.logger = {
	info: info
};