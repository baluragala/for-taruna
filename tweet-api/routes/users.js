var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.json([{username: 'user1'}, {username: 'user2'}, {username: 'user3'}, {username: 'user4'}]);
});

router.get('/userById', function (req, res, next) {
	res.json({username: 'user1'});
});


module.exports = router;
