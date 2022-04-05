const http = require("http");
const fs = require("fs");

const books = fs.readdirSync("./books")
console.log(books)
let bookPath = "./books/"
const serverBook = []
for (book of books) {
    
    serverBook.push(bookPath + book)
    
}
console.log(serverBook)


const server = http.createServer((request, response) => {
    console.log(request.method, request.url);
    response.setHeader("Content-Type", "text/html")
    console.log('Server running')
    

    
    if (request.url === "/frankenstein") {
        fs.readFile(serverBook[1], (err, data) => {
            if (err) {
                console.log(err);
                response.statusCode = 500;
                response.end(err);
            } else {
                response.end(data);
            }

        });
    } 
    // else if (http.request.url === "/wonderland") {
    //     fs.readdirsync("lab04/books/alice.txt", (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             response.statusCode = 500;
    //             response.end(err);
    //         } else {
    //             Response.end(data);
    //         }
    //     });
    // } else if (http.request.url === "/sherlock") {
    //     fs.readdirSync("./books/sherlock.txt", (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             response.statusCode = 500;
    //             response.end(err);
    //         } else {
    //             Response.end(data)
    //         }
    //     });
    // }
     else {
        response.statusCode = 404;
        response.end('page not found')
     }  


}); 
server.listen(4040);