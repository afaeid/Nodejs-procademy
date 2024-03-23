const readline = require("readline");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
})

rl.question("Write your name here: ", (name)=>{

console.log("Your name is: "+ name);
rl.close();
});

rl.on("close", ()=>{
 console.log("The interface closed");
 process.exit(0);
})
