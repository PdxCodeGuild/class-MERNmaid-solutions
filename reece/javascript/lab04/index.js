const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.method, request.url);
    response.setHeader("Content-Type", "text/html");
    if (request.url === "/") {
        fs.readFile("./books/PrideAndPrejudice.txt", (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end(err);
            } else {
                console.log('hey')
                response.end(data);
            }
        });
    } else if (request.url === "/GreenLight") {
        fs.readFile("./books/TheGreatGatsby.txt", (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end(err);
            } else {
                console.log('hey')
                response.end(data);
            }
        });
    } else if (request.url === "/Gray") {
        fs.readFile("./books/ThePictureOfDorianGray.txt", (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end(err);
            } else {
                console.log('hey')
                response.end(data);
            }
        });
    };
});



server.listen(3000);