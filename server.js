// precondition:
// fibjs installed: http://fibjs.org/download/
// $ fibjs server.js

const http = require('http');
const path = require('path');

const port = 4001;
const staticFileHandler = http.fileHandler(path.join(__dirname, 'docs'));

const server = new http.Server(port, staticFileHandler);
console.log(`preview server running on http://127.0.0.1:${port}`);
server.run();