const { RSA_PKCS1_OAEP_PADDING } = require('constants');
var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
        
	var path = req.url
	var port = path.substring(1)
    	var loc = "http:/" + path + "/"
	var ip = "http://" + port + "/"
        // set response header
        res.writeHead(307, { 'Location': 'https://c9c253qh2d3m6vjf5tg0cjcnfgyyyyyyn.interact.sh/' }); 
        
        // set response content    
        res.write(path);
        res.end();
    

});

server.listen(process.env.PORT); //6 - listen for any incoming requests

console.log('Node.js web server is running..')
