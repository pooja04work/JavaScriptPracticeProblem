const read = require("prompt-sync");
const prompt = read();

let number = prompt("Enter the value of n = ");
number = Number(number);

count = 1;
limit = 256;

while(count < number && count < limit){
    power = Math.pow(2,count);
    console.log("Table of 2^"+ count + " = "+ power);
    if( power >= limit )
    {
        console.log("Limit reached!!");
        break;
    }
    count++;
}