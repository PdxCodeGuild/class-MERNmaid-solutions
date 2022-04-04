const fs = require("fs");
const http = require("http");

const listOfBooks = fs.readdirSync("./books");

console.log(listOfBooks);
const server = http.createServer((request, response) => {
	// Set the mime-type to plain/text, don't worry about mime types
	// this just tells the client what data is being sent
	const headers = { "Content-Type": "text/plain" };

	// compare request.url and your list of books to see if it exists
	let bookFound = listOfBooks.find((book) => book === request.url.slice(1)); // slice off the leading / then find the book
	// console.log(bookFound);

	if (bookFound) {
		// Return back a 200 and the book
		response.writeHead(200, headers);
		response.end(fs.readFileSync(`./books/${bookFound}`)); // read the file
		// const text = response.write("test"); // Read the book text
	} else if (request.url === "/") {
		// Return back a 200 and the list of books as URLs
		response.writeHead(200, headers);
		response.write("List of Books: \n\n");
		response.end(listOfBooks.join("\n"));
	} else {
		// Return back a 404 and a message
		response.writeHead(404, headers);
		response.write(`Book ${request.url} not found!\n\n\n\n\n`);
		response.write("Try: \n\n");
		response.end(listOfBooks.join("\n"));
	}

	// End our response
	// response.end(); // Note needed
});

// Listen on port 3000
server.listen(3333);
