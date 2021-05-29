const read = require("prompt-sync");
const prompt = read();

function  primeFactor(){
let  number = prompt("Enter a number: ");
number = Number(number);
primeFactor = new Array(); 

for(count = 2; count <= number; count++){
    while((number % count) == 0){
        number = number / count;    
        primeFactor.push(count);
    }
}
console.log("Prime Factors: " + primeFactor);
}
primeFactor();