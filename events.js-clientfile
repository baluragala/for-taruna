const EventEmitter = require("events").EventEmitter;
const ee = new EventEmitter();

// 1. emit an event
// 2. subcsribe to an event


/*ee.on('hello', function (message) {
 console.log(JSON.stringify(message));
 message.eventWeight = -999;
 console.log('Hello event received-1')
 });
 ee.on('hello', function (message) {
 console.log(JSON.stringify(message));
 console.log('Hello event received-2')
 });
 ee.on('hello', function (message) {
 console.log(JSON.stringify(message));
 console.log('Hello event received-3')
 });
 ee.on('hello', function (message) {
 console.log(JSON.stringify(message));
 console.log('Hello event received-4')
 });

 ee.emit('hello', {eventType: 'adhoc1', eventWeight: 5});
 ee.emit('hello', {eventType: 'adhoc2', eventWeight: 6});
 ee.emit('hello', {eventType: 'adhoc3', eventWeight: 7});*/


/*
var firstSubscriber = function () {
	console.log("firstSubscriber");
	ee.removeListener("firstConnection", firstSubscriber);
};


var secondSubscriber = function () {
	console.log("secondSubscriber");
	ee.removeListener("firstConnection", secondSubscriber);
};

ee.on("firstConnection", firstSubscriber);
ee.on("firstConnection", secondSubscriber);
ee.emit("firstConnection");
console.log('2nd Emit');
ee.emit("firstConnection");*/


ee.once("started1", function () {
	console.log("event has occured - 1");
}); //1

ee.once("started1", function () {
	console.log("event has occured - 2");
}); //2

ee.once("started1", function () {
	console.log("event has occured - 3");
}); //3

//publishing
ee.emit("started1");
ee.emit("started1");
ee.emit("started1");
ee.emit("started1");
