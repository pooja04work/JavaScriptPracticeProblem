const input = require('prompt-sync');
const prompt = input();
let number = prompt("enter number 1 or 10 or 100 or 1000 or 10000: ");
number = Number(number);

if(number == 1){
    console.log("Unit");
}
else if(number == 10){
    console.log("Ten");
}
else if(number == 100){
    console.log("Hundred");
}
else if(number == 1000){
    console.log("Thousand");
}
else if(number == 10000){
    console.log("Ten thousand");
}
else{
    console.log("Invalid");
}