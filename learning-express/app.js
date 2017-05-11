const express = require('express');
const app = new express();


app.get('/', function (req, res) {
	res.end('<h1>Hello Express</h1>')
});

app.get('/tasks', function (req, res) {
	res.end('<h1>Hello Express, tasks</h1>')
});


app.post('/', function (req, res) {
	res.end('<h1>Hello Express-POST</h1>')
});

app.post('/tasks', function (req, res) {
	res.end('<h1>Hello Express, tasks-POST</h1>')
});


app.get('/posts', function (req, res) {
	res.end('<h1>Hello Express, posts</h1>')
});

app.get('/tweets', function (req, res) {
	res.end('<h1>Hello Express, tweets</h1>')
});


app.listen(3000, function (req, res) {
	console.log('Server is running on port 3000');
});