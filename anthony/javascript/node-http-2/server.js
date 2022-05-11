const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.method, request.url);
  response.setHeader("Content-Type", "text/html");

  // Switch version
  // switch (request.url) {
  //   case "/":
  //     fs.readFile("./pages/index.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         response.statusCode = 500;
  //         response.end(err);
  //       } else {
  //         response.end(data);
  //       }
  //     });
  //     break;
  //   case "/about":
  //     fs.readFile("./pages/about.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         response.statusCode = 500;
  //         response.end(err);
  //       } else {
  //         response.end(data);
  //       }
  //     });
  //     break;
  //   default:
  //     //Set status code before writing to response
  //     response.statusCode = 404;
  //     fs.readFile("./pages/404.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         response.statusCode = 500;
  //         response.end(err);
  //       } else {
  //         response.end(data);
  //       }
  //     });
  // }

  // if/else if version
  if (request.url === "/") {
    // localhost:4040/
    // Read in the file
    fs.readFile("./pages/index.html", (err, data) => {
      // fs.readfile takes 2 parameters, 1: filepath, 2: function to run once complete
      // If error, console log error
      if (err) {
        console.log(err);
        // Set statuscode to 500 if error, signifying a server side error
        response.statusCode = 500;
        response.end(err);
      } else {
        // If no error, respond with data from file
        response.end(data);
      }
    });
  } else if (request.url === "/about") {
    // localhost:4040/about
    fs.readFile("./pages/about.html", (err, data) => {
      if (err) {
        console.log(err);
        response.statusCode = 500;
        response.end(err);
      } else {
        response.end(data);
      }
    });
  } else {
    // Set status code before writing to response
    response.statusCode = 404;
    fs.readFile("./pages/404.html", (err, data) => {
      if (err) {
        console.log(err);
        response.statusCode = 500;
        response.end(err);
      } else {
        response.end(data);
      }
    });
  }
});

// set server to listen on port 4040
server.listen(4040);
