const http = require("http"); // importing Node's built-in web server module

const app = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello World")
})

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);