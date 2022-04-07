const fs = require('fs');
const http = require('http');

const books = fs.readdirSync("./books/")
const titles = []
for (book of books) {
  const bookContent = fs.readFileSync("./books/" + book).toString();
  titles.push({"file": "books/" + book, "title": /title: (.*)/img.exec(bookContent)[1]});
}

console.log(titles)

const server = http.createServer((request, response) => {
  // Set the mime-type to plain/text, don't worry about mime types
  // this just tells the client what data is being sent
  const headers = {'Content-Type': 'text/plain'};
  let titleQuery = request.url.toLowerCase().replace(/%20|\+|_/img, " ").replace("/", "")

  const bookFound = titles.filter((book) => {
    return -1 != book.title.toLowerCase().search(titleQuery)
  })
  // compare request.url and your list of books to see if it exists

  if(bookFound.length != 0) {
    // Return back a 200 and the book
    response.writeHead(200, headers);
    if (bookFound.length == 1) {
      const text = fs.readFileSync("./" + bookFound[0].file).toString()
      response.write(text);
    } else {
      response.write("multiple matches, try" + bookFound.map((book) => {
        return " " + book.title
      }).toString())
    }
  } else {
    // Return back a 404 and a message
    response.writeHead(404, headers);
    response.write(`Book ${request.url} not found!`);
  }

  // End our response
  response.end();
});

// Listen on port 3000
server.listen(3000);