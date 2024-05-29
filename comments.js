// Create web server
// Create a server that listens on port 3000
// The server should respond with the text "Hello, World!" when it receives a request
// The server should respond with a 404 status code when it receives a request for a path that does not exist
// The server should respond with the text "You sent a POST request" when it receives a POST request to the /comments path
// The server should respond with the text "You sent a GET request" when it receives a GET request to the /comments path
// The server should respond with the text "You sent a PUT request" when it receives a PUT request to the /comments path
// The server should respond with the text "You sent a DELETE request" when it receives a DELETE request to the /comments path

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('Hello, World!');
  } else if (req.url === '/comments' && req.method === 'POST') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('You sent a POST request');
  } else if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('You sent a GET request');
  } else if (req.url === '/comments' && req.method === 'PUT') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('You sent a PUT request');
  } else if (req.url === '/comments' && req.method === 'DELETE') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('You sent a DELETE request');
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
    });
    res.end('Error 404: Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});