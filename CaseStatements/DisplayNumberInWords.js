const read = require("prompt-sync");
const prompt = read();

let number = prompt("Enter number 1 pr 10 or 100 pr 1000 or 10000: ");
number = Number(number);

switch(number){
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Above limit");
        break;
}