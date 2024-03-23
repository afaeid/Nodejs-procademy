const fs = require("fs");

fs.readFile("./files/input.txt", "utf-8", (err, data) => {
 fs.writeFile("./files/output.txt", `Data has taken from input.txt: ${data}`, (err1, data1) => {
  if (err) {
   console.log(err);
  } else {
   console.log(data);
  }
 })
})