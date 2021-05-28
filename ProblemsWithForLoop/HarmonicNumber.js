const read = require("prompt-sync");
const prompt = read();

let term = prompt("Enter the nth term = ");
term = Number(term);

var singleLine = " ";
for(i = 1; i < term; i++){
    singleLine += "1/"+ i + " + ";
}
console.log("HarmonicNumbers: " + singleLine + "1/" + term);