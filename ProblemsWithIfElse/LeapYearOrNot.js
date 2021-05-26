const input = require('prompt-sync');
const prompt = input();

let year = prompt("Enter year(yyyy): ");
year = Number(year);

if((year % 4 ) == 0){
    if(( year % 100 ) == 0){
        if(( year % 400 ) == 0){
            console.log(year + " is leap year");
        }    
        else{
            console.log(year + " is not a leap year");
        }
    }    
    else{
        console.log(year + " a leap year");
    }
}        
else{
    console.log(year + " not a leap year");
}