countWin = 100
countLoss = 100
countMatch = 0
win = 200
loss = 0
numberOfWin = 0
numberOfLoss = 0
while(countWin < win || countLoss > loss){
    randomNumber = Math.round(Math.random() * (2 - 1));
        if(randomNumber == 0){
            countWin += 1;
            numberOfWin += 1;
        }else{
            countLoss -= 1;
            numberOfLoss += 1;
        }
        countMatch += 1;
    }
if(countWin == win){
    console.log("Win " + numberOfWin + " total number of match " + countMatch);
}else if(countLoss == loss){
    console.log("loss " + numberOfLoss + " total number of match " + countMatch);
}