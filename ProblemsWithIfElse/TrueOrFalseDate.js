const input = require('prompt-sync');
const prompt = input();

let day = prompt("Enter  a day: ");
let month = prompt("Enter a month: ");
day = Number(day);
month = Number(month);
console.log("Entered date is = "+day+ "/" +month);
if(day >= 20 && month >= 3 && day <= 20 && month <= 6){
    console.log("true");
}
else{
    console.log("false");
}