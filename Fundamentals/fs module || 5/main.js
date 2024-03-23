const fs = require("fs");

var input = fs.readFileSync("./files/input.txt", "utf-8");
console.log(input);

var data = `Datas have been read from input.txt and written here:  \n Data Created ${new Date()}`
fs.writeFileSync("./files/output.txt", data);
