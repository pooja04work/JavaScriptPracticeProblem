function digitRepeat(){
repeatedDigit = new Array();

for(counter = 10; counter < 100; counter++){
    if((counter % 11) == 0){
        repeatedDigit.push(counter);
    }
}
console.log("Repeated number is: " + repeatedDigit);
}

digitRepeat();