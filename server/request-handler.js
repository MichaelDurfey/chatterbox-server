
const fs = require('fs');
var path = require('path');
/*************************************************************

  

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

const messages = {};
messages.results = [];

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  const {method, url } = request;
  // console.log(`method ${method} from url ${url}`);

  // GET to /classes/messages (data)
  // send back the messages object
  // POST to /classes/messages (data)
  // store sent message in the messages.results array
  // OPTIONS to /classes/messages (data)
  // send back as headers the CORS info
  // GET request to / (static file)
  // serve index.html
  // GET request to ______ (static file)
  // serve ____ .js/.css/??



  

  // The outgoing status.
  var statusCode = 200;
  var headers = defaultCorsHeaders;
    
  let body = [];
  const requestHeader = request.headers;
  if (method === 'GET' && url === '/classes/messages') {
    headers['content-type'] = 'application/json';

    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(messages));
  } else if (method === 'GET' && url === '/') {
    var filePath = '../client/index.html';
    // console.log(filePath)

    var contentType = 'text/html';

    fs.readFile(filePath, function(error, content) {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(content, 'utf-8');
    });
  } else if (method === 'GET' && url === '/build/bundle.js') {
    var filePath = '../client/build/bundle.js';
    // console.log(filePath)

    var contentType = 'text/javascript';

    fs.readFile(filePath, function(error, content) {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    });
  } else if (method === 'GET' && url === '/app/styles/styles.css') {
    var filePath = '../client/app/styles/styles.css';
    // console.log(filePath)

    var contentType = 'text/javascript';

    fs.readFile(filePath, function(error, content) {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    });
  } else if (method === 'POST' && url === '/classes/messages') {
    console.log('this was a post', request);
    response.writeHead(201, headers);
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      messages.results.push(JSON.parse(body));
      response.end('message received!');
    });
  } else if (method === 'OPTIONS' && url === '/classes/messages') {
    response.writeHead(200, headers);
    response.end('OK');
  } else {
    response.writeHead(404, headers);
    response.end('invalid url');
  }
  // See the note below about CORS headers.
  //Response Headers:

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.

exports.requestHandler = requestHandler;
exports.messages = messages;
