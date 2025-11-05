// save as parse-url.js
// Import the URL module
const url = require('url');
// Define a sample URL
const address = 'https://www.example.com/products?category=books&price=low';

// Parse the URL
const parsedUrl = url.parse(address, true);
// Display parsed components
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Pathname:', parsedUrl.pathname);
console.log('Search Query:', parsedUrl.search);
console.log('Query Parameters:', parsedUrl.query);
