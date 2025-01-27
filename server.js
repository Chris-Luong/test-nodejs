// Tutorial:
// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });

	res.write('<h1>Hello, Node.js HTTP Server!</h1>');
	res.end();
})

const port = 3000;

server.listen(port, () => {
	console.log(`Node.js HTTP Server is running on port ${port}`);
});
