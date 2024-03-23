const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
 if (req.url === '/getImage') {
  const filename = 'your-image-filename.jpg'; // Replace with your actual filename
  const filePath = path.join(__dirname, 'images', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
   if (err) {
    res.statusCode = 404;
    res.end('File not found');
   } else {
    fs.createReadStream(filePath).pipe(res);
   }
  });
 } else {
  res.statusCode = 404;
  res.end('Not found');
 }
});

server.listen(3000, () => {
 console.log('Server listening on port 3000');
});