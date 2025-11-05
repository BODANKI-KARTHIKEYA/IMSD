const http = require('http');
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send a response to the client
    res.write('<h2>Hello, this is a Node.js Web Server!</h2>');
    res.write('<p>Your JavaScript code is running on the server side.</p>');
    res.end();
});

// Define the port number
const PORT = 3000;

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
