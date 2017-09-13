//Code for AIHPC cloud to hash data and salt with SHA256 algo lib 

//Usage: 1 start API REST server: node www_hashsalt.js
//2 web: http://localhost:3001/?data=123&salt=456

//Useful preps: npm install js-sha256

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.data + " " + q.salt;

  var hashed = getSHA256(txt);
  res.end("IN:"+txt+"<br>OUT:"+hashed);
}).listen(3001);


function getSHA256(datasalt)
{
	var sha256 = require('js-sha256');

	var out = sha256(datasalt);

	console.log("data_salt="+datasalt);
	console.log("hashed="+out);

	return out;
}
