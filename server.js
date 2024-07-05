
const http = require('http');
const express = require('express'); // Import the Express.js framework

const app = express();

// const server = http.createServer((req, res) => {

//     console.log("Booo")
// });

app.get('/', (req, res) => {
    filepath = __dirname + '/test.html';
    res.sendFile(filepath);
});




const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});