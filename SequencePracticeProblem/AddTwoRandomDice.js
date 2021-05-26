//Use REPL – Add two Random Dice Number and Print the Result
let firstRandomDiceNumber = Math.floor(Math.random()*(6-1)+1); 
let secondRandomDiceNumber = Math.floor(Math.random()*(6-1)+1);
console.log("First Value: " + firstRandomDiceNumber);
console.log("Second Value: " + secondRandomDiceNumber);
let addition = firstRandomDiceNumber + secondRandomDiceNumber;
console.log("addition value of two random number: " + addition);