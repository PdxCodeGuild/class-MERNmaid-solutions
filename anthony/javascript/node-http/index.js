const http = require("http");
const fs = require("fs");

const server = http.createServer(async (request, response) => {
  console.log(request.url);
  console.log(request.method);

  if (request.url === "/mernmaid") {
    response.statusCode = 200;

    const page = fs.readFileSync("./pages/index.html");
    const html = page.toString();
    response.write(html);

    // response.write("Hello Class MERNmaid");
  } else if (request.url === "/panda") {
    response.statusCode = 200;
    response.write("Welcome to panda");
  } else {
    response.statusCode = 404;
    response.write("Page not found");
  }

  response.end();
});

server.listen(8000);
