const read = require("prompt-sync");
const prompt = read();

lowerLimit = 1;
upperLimit = 100;
flag = 0;
mid = 0;

let userInputNumber = prompt("Enter a number: ");
userInputNumber = Number(userInputNumber);

while(flag == 0){
    mid = Math.floor(lowerLimit + upperLimit) / 2;

    if(userInputNumber == mid){
        console.log(userInputNumber + " is the magic number.");
        flag = 1;
    }
    else if (userInputNumber > mid) {
        lowerLimit = mid + 1;
    }
    else {
        upperLimit = mid - 1;
    }
}