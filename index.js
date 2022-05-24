const http = require('http');
const fs = require('fs');



http.createServer(function (request, response) {

  response.setHeader('Content-Type', 'text/html');

  let path = './views/';

  switch (request.url) {
    case '/':
        path += 'index.html';
        response.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        response.statusCode = 200;
        break;
    case '/contact-me':
        path += 'contact-me.html'
        response.statusCode = 200;
        break;
    default:
        path += '404.html'
        response.statusCode = 404;
          break;
  }

fs.readFile(path, (error, result) => {
    if (error) {
        console.log(error);
        response.end(result);
    } else{
        response.end(result);
    }
})
  



}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');