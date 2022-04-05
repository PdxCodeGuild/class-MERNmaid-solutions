const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

  const headers = {'Content-Type': 'text/html'};

  const serveMap = {
    "/": "./pages/index.html",
    "/bible": "./books/bible.txt",
    "/conspiracy": "./books/conspiracy.txt",
    "/kybalion": "./books/kybalion.txt",
    "/404": "./pages/404.html"
  }

  try {
    fs.readFile(serveMap[request.url] ?? serveMap["/404"], (error, data) => {
      if(error) {
        response.statusCode = 404;
        response.end(serveMap["/404"]);
      } else {
        response.writeHead(200, headers);
        response.end(data);
      }
    })
  } catch(error) {
    response.statusCode = 500;
    response.end(error);
  }
});

server.listen(3000);
