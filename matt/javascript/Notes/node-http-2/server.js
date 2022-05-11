const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    console.log(request.method, request.url);
    response.setHeader('Content-Type', 'text/html');

    //     // case example
    // switch (request.url){
    //     case "/": {
    //         fs.readFile('./pages/index.html', (err, data) => {
    //             if (err){
    //                 console.log(err);
    //                 response.statusCode == 500;
    //                 response.write(err);
    //             }else{
    //                 response.end(data)
    //             }
    //             });
    //         break;
    //     }
    // }

    if (request.url === '/') {
        fs.readFile('./pages/index.html', (err, data) => {
            if (err){
                console.log(err);
                response.statusCode == 500;
                response.write(err);
            }else{
                response.end(data)
            }
        });
    } else if (request.url === '/about'){
        fs.readFile('./pages/about.html', (err, data) => {
            if (err){
                console.log(err);
                response.statusCode == 500;
                response.write(err);
            }else{
                response.end(data)
            }
        })
    } else{
            // Set status code before writing to response
            response.statusCode = 404;
            response.end("Page not found");
        }
});

server.listen(4000);