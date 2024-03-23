const http = require("http");

var PORT = 4000;
var host = "127.0.0.1"
var app = http.createServer((req, res)=>{
 res.end("Response is from the serer")
})

app.listen(4000, "127.0.0.1", ()=>{
 console.log(`Server is running at http://${host}/${PORT}`);
})
