const http = require('http');
const {ALL_USERS} = require('./fakeData.js')
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
	console.log(req.url)
  if(req.url === '/users') {
    res.end(JSON.stringify(ALL_USERS))
  } else if(req.url?.startsWith("/user/")) {
		const strArr = req.url.split("/");
		const userId = strArr[strArr.length - 1];
		const user = ALL_USERS.find(item => item.id === +userId);
		console.log(user)
		res.end(JSON.stringify(user));
	}
	else {
		res.end(JSON.stringify('Not Found'))
	}
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});