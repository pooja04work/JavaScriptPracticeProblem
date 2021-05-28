upper = 999;
lower = 100;

var randomNumbers = new Array();

for(i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * (upper - lower) + lower);
    randomNumbers[i] = number;
}
console.log("ArrayOfRandomNumber: " + randomNumbers);

largestValue = randomNumbers[0];
smallestValue = randomNumbers[0];
secondLargest = 0;
secondSmallest = 0;

for(j = 1; j < randomNumbers.length; j++){
    if(randomNumbers[j] > largestValue){
        secondLargest = largestValue;
        largestValue = randomNumbers[j];
    }
    else if(randomNumbers[j] != largestValue && secondLargest == 0 || randomNumbers[j] > secondLargest){
        secondLargest = randomNumbers[j]
    } 

    if(randomNumbers[j] < smallestValue){
        secondSmallest = smallestValue;
        smallestValue = randomNumbers[j];
    }
    else if(randomNumbers[j] != smallestValue && secondSmallest == 0 || randomNumbers[j] < secondSmallest){
        secondSmallest = randomNumbers[j];
    }
}
console.log('Second largest value is = '+secondLargest);
console.log('Second smallest value is = '+secondSmallest);