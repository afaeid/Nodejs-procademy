const http = require("http");
const fs = require("fs");

const app = http.createServer();
/*====== Using write method*/
// app.on("request", (req, res)=>{
//  let rs = fs.createReadStream("./large-file.txt");
 
//  rs.on("data", (chunk)=>{
//   res.write(chunk);
//  });
//  rs.on("end", ()=>{
//   res.end("Sending response completed.")
//  });
 
 
//  rs.on("error", (err)=>{
//   console.log(err.message);
//   res.end(err.message)
//  })
// })


app.listen(4000, "127.0.0.1", ()=>{
 console.log("Server is at http://127.0.0.1:4000/");
})

/*========== Using pipe method ============*/
app.on("request", (req, res)=>{
 let rs = fs.createReadStream("./large-file.txt");
 rs.pipe(res);
 // readableStream.pipe(writableStream)
})



console.log("Hello world")