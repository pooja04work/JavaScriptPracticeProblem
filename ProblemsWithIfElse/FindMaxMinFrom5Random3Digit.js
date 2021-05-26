let uperLimit = 999
let lowerLimit = 100
let randomVal1 = Math.floor(Math.random() * (uperLimit - lowerLimit) + lowerLimit);
let randomVal2 = Math.floor(Math.random() * (uperLimit - lowerLimit) + lowerLimit);
let randomVal3 = Math.floor(Math.random() * (uperLimit - lowerLimit) + lowerLimit);
let randomVal4 = Math.floor(Math.random() * (uperLimit - lowerLimit) + lowerLimit);
let randomVal5 = Math.floor(Math.random() * (uperLimit - lowerLimit) + lowerLimit);

console.log("1st random number " + randomVal1);
console.log("2nd random number " + randomVal2);
console.log("3rd random number " + randomVal3);
console.log("4th random number " + randomVal4);
console.log("5th random number " + randomVal5);

if(randomVal1 > randomVal2  &&  randomVal1 > randomVal3  && randomVal1 > randomVal4 && randomVal1 > randomVal5){
    console.log("the largest number is: " + randomVal1);   
}

else if(randomVal2 > randomVal3 && randomVal2 > randomVal4 && randomVal2 > randomVal5){
    console.log("the largest number is: " + randomVal2);
}

else if(randomVal1 > randomVal4 && randomVal1 > randomVal5){
    console.log("the largest number is: " + randomVal3);
}

else if(randomVal4 > randomVal5){
    console.log("the largest number is: " + randomVal4);
}

else{
    console.log("the largest number  +is: " + randomVal5);
}

if(randomVal1 < randomVal2  &&  randomVal1 < randomVal3  && randomVal1 < randomVal4 && randomVal1 < randomVal5){
    console.log("the smallest number is: " + randomVal1);   
}

else if(randomVal2 < randomVal3 && randomVal2 < randomVal4 && randomVal2 < randomVal5){
    console.log("the smallest number is: " + randomVal2);
}

else if(randomVal1 < randomVal4 && randomVal1 < randomVal5){
    console.log("the smallest number is: " + randomVal3);
}

else if(randomVal4 < randomVal5){
    console.log("the smallest number is: " + randomVal4);
}

else{
    console.log("the smallest number  +is: " + randomVal5);
}