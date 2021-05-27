const input = require('prompt-sync');
const prompt = input();

let number = prompt("Enter a number between 1 to 7: ");
number = Number(number);

if(number == 1){
    console.log("Monday");
}else if(number == 2){
    console.log("Tuesday");
}else if(number == 3){
    console.log("Wednessday");
}else if(number == 4){
    console.log("Thrusday");
}else if(number == 5){
    console.log("Friday");
}else if(number == 6){
    console.log("Saturday");
}else if(number == 7){
    console.log("Sunday");
}else{
    console.log("Incorrect input ");
}