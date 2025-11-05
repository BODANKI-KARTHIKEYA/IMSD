// Import the built-in http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header with status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Transfer data to the client over HTTP
    res.write('Transferring data over HTTP protocol using Node.js\n');
    res.write('This data is sent from the server to the client.\n');
    res.write('Hello Client, this is your Server speaking!\n');

    // End the response
    res.end('--- Data Transfer Complete ---');
});

// Define the port number
const PORT = 4000;

// Start the server and listen for incoming requests
server.listen(PORT, () => {
    console.log(`Server is running and transferring data at http://localhost:${PORT}`);
});
