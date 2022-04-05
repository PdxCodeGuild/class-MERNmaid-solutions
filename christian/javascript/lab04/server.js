const http = require("http");
const fs = require("fs");  // import http for server and fs to fetch files
const books = fs.readdirSync("./books")
// console.log(books)

let bookPath = "./books/" // put array of books(files in book folder)
const serverBook = [] 
for (book of books) {
    serverBook.push(bookPath + book) // loop over array, push/ concantinate book file + string of book
}
console.log(serverBook)


const server = http.createServer((request, response) => { ///create server request and response
    console.log(request.method, request.url);
    response.setHeader("Content-Type", "text/html")
    // console.log('Server running')
    

    // logic
    if (request.url === "/frankenstein") {
        fs.readFile(serverBook[1], (err, data) => { //match book indici with url request
            if (err) {
                console.log(err);
                response.statusCode = 500; // error 
                response.end(err);
            } else {
                response.end(data); // wrap up with response.end
            }

        });
    }
    if (request.url === "/wonderland") {
        fs.readFile(serverBook[0], (err, data) => {
            if (err) {
                console.log(err);
                response.statusCode = 500;
                response.end(err);
            } else {
                response.end(data);
            }

        }); 
     

    }
     if (request.url === "/sherlock") {
         fs.readFile(serverBook[2], (err, data) => {
             if (err) {
                console.log(err);
                 response.statusCode = 500;
                 response.end(err);
             } else {
                 response.end(data);
             }

        });
    }
})
server.listen(3000)