process.on('beforeExit', function (e) {
	console.log('beforeExit');
	console.log(e);
});

process.on('exit', function (e) {
	console.log('exit');
	console.log(e);
});


process.on('uncaughtException', function (e) {
	console.log('uncaughtException');
	console.log(e);
});


	throw new Error('CustomError');

	console.log('1');
	console.log('2');
	console.log('3');
	console.log('4');
	console.log('5');



