const read = require('prompt-sync');
const prompt = read();

let aSingleDigitNumber =  prompt("enter a number between 1 to 9: "); 
aSingleDigitNumber = Number(aSingleDigitNumber);

if(aSingleDigitNumber > 9 || aSingleDigitNumber < 0){
    console.log( "Incorrect input!!!");
}    
else{
    if(aSingleDigitNumber == 0){
        console.log( "zero");
    }else if(aSingleDigitNumber == 1){
        console.log( "one");
    }else if(aSingleDigitNumber == 2){
        console.log( "two");
    }else if(aSingleDigitNumber == 3){
        console.log( "three");
    }else if(aSingleDigitNumber == 4){
        console.log( "four");
    }else if(aSingleDigitNumber == 5){
        console.log( "five");
    }else if(aSingleDigitNumber == 6){
        console.log( "six");
    }else if(aSingleDigitNumber == 7){
        console.log( "seven");
    }else if(aSingleDigitNumber == 8){
        console.log( "eight");
    }else if(aSingleDigitNumber == 9){
            console.log( "nine");
    }
}           