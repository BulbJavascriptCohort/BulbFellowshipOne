// Load HTTP module
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1"; // house address  // computer address // ip address
const port = 2000;
// const httpPort = 80;
// const httpsPort = 443;  // ssl

function serveHTML(path, response) {
	fs.readFile(__dirname + path, (err, data) => {
		if (err) {
			response.writeHead(500, { "Content-Type": "text/plain" });
			response.end("500 _ Internal error");
		}

		response.writeHead(200, { "Content-Type": "text/html" });
		response.end(data);
	});
}

// Create HTTP server
const server = http.createServer((req, res) => {
	// console.log( {req}, {res} )
	let requestUrl = req.url.toLowerCase();
	switch (requestUrl) {
		case "/fatimah":
			serveHTML("/cohort2/fatimah.html", res);
			break;
		case "/babatunde":
			serveHTML("/cohort2/babatunde.html", res);
			break;
		case "/matthew":
			serveHTML("/cohort2/matthew.html", res);
			break;
			case "/omolola":
			serveHTML("/cohort2/omolola.html", res);
			break;
		default:
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end(`Hello ${req.url}\n`);
	}
	// if( requestUrl === "/fatimah" ){
	//    serveHTML("/cohort2/fatimah.html", res)
	// }
	// else if( requestUrl === "/babatunde" ){
	//    serveHTML("/cohort2/babatunde.html", res)
	// }
	// else{
	//    // Set the response HTTP header with HTTP status and Content type
	//    res.writeHead(200, {'Content-Type': 'text/plain'});

	//    // Send the response body "Hello World"
	//    res.end(`Hello ${req.url}\n`);
	// }
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	// console.log( http )
});
