let uperLimit = 99;
let lowerLimit = 10;
let randomVal1 = Math.floor( Math.random() * (uperLimit - lowerLimit) + lowerLimit );
let randomVal2 = Math.floor( Math.random() * (uperLimit - lowerLimit) + lowerLimit );
let randomVal3 = Math.floor( Math.random() * (uperLimit - lowerLimit) + lowerLimit );
let randomVal4 = Math.floor( Math.random() * (uperLimit - lowerLimit) + lowerLimit );
let randomVal5 = Math.floor( Math.random() * (uperLimit - lowerLimit) + lowerLimit );

console.log("1st random number " + randomVal1);
console.log("2nd random number " + randomVal2);
console.log("3rd random number " + randomVal3);
console.log("4th random number " + randomVal4);
console.log("5th random number " + randomVal5);

let addition = (randomVal1 +  randomVal2 +  randomVal3 +  randomVal4 +  randomVal5 );
 console.log("Addition value of 5 random number is: " + addition);
let average = (addition/5);
console.log("Avarage value of 5 random number is: " + average);