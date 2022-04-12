const http = require("http");
const fs = require("fs");

filenames = fs.readdirSync("./Books");

const books = []
  
console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
  books.push("./Books/" + file)
});

const server = http.createServer((request, response) => {
    console.log(request.method, request.url);
    response.setHeader('Content-Type', 'text/html');

    if (request.url === '/book1') {
        fs.readFile(books[0], (err, data) => {
            if (err){
                console.log(err);
                response.statusCode == 500;
                response.write(err);
            }else{
                response.end(data)
            }
        });
    } else if (request.url === '/book2'){
        fs.readFile(books[1], (err, data) => {
            if (err){
                console.log(err);
                response.statusCode == 500;
                response.write(err);
            }else{
                response.end(data)
            }
        })
        
    } else if (request.url === '/book3'){
        fs.readFile(books[2], (err, data) => {
            if (err){
                console.log(err);
                response.statusCode == 500;
                response.write(err);
            }else{
                response.end(data)
            }
        })
        
    } 
    else{
            // Set status code before writing to response
            response.statusCode = 404;
            response.end("Page not found");
        }
        
});

server.listen(3000);