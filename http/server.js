const http = require('http');


const requestHandler = function (req, res) {
	res.writeHead(200,{"Content-Type": "text/html"});
	if(req.url=='/products') {
		res.write("<h1>products</h1>");
	} else if(req.url=='/blogs') {
		res.write("<h1>blogs</h1>");
	} else if(req.url=='/posts') {
		res.write("<h1>posts</h1>");
	}else
	{
		res.writeHead(404);
		res.write("<h1>NOT FOUND</h1>");
	}
	res.end();
};

const server = http.createServer(requestHandler);

server.listen(4000);