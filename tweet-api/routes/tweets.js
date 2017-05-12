const express = require('express');
const router = express.Router();

/*
 /tweets
 /tweets/:tweetId
 */

let id = 2;
let tweets = [
	{
		id: 1,
		message: 'This is first tweet',
		user: 1,
		likes: [2],
		replies: [{
			message: 'This is reply to this tweet',
			by: 2
		}]
	},
	{
		id: 2,
		message: 'This is second tweet',
		user: 2,
		likes: [1],
		replies: [{
			message: 'This is reply to this tweet',
			by: 1
		}]
	}
];

router.get('/', function (req, res) {
	res.json(tweets)
});

router.get('/:tweetid', function (req, res) {
	console.log(req.params.tweetid);
	let filteredTweets = tweets.filter(function (t) {
		return t.id == req.params.tweetid;
	});
	if (filteredTweets.length == 0) {
		res.status(404).json({message: 'No tweet found'});
	}
	res.json(filteredTweets[0]);
});

router.post('/', function (req, res) {
	console.log(req.body);
	let newTweet = req.body;
	newTweet.id = ++id;
	tweets.push(newTweet);
	res.status(201).json(newTweet);
});

module.exports = router;