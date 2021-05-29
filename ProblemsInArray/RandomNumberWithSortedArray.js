upper = 999;
lower = 100;
counter = 0;

function randomValueWithSortedArray(){
randomNumberArray = new Array();
while(counter < 10){
    randomNumberArray[counter] = Math.floor(Math.random() * (upper - lower) + lower);
    counter += 1;
}

console.log(randomNumberArray);

largestNumber = randomNumberArray[0];
secondLargestNumber = randomNumberArray[0];
smallestNumber = randomNumberArray[0];
secondSmallestNumber = randomNumberArray[0];


for ( i = 1; i < randomNumberArray.length ; i++){
    for (j = 0; j < (randomNumberArray.length) - 1; j++){
        if(randomNumberArray[j] > randomNumberArray[j+1]){
            swap = randomNumberArray[j];
            randomNumberArray[j] = randomNumberArray[j+1];
            randomNumberArray[j+1] = swap;
        }
    }
}
for(c = 0; c < randomNumberArray.length; c++){
    console.log("sorted " + randomNumberArray[c]);
}
console.log("Second Largest number in the array is" + randomNumberArray[1]);
console.log("Second Smallest number in the array is" + randomNumberArray[randomNumberArray.length-2]);
}
randomValueWithSortedArray();