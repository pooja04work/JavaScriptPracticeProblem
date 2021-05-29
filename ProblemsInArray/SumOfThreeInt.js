function threeIntSum(){
array1 = new Array();
array1 = [-4, 7, -3, 2, 9];
found = 0;
for(count = 0; count < (array1.length) - 2; count++){
    for(countTwo = count + 1; countTwo < (array1.length) - 1; countTwo++){
        for(countThree = countTwo + 1; countThree < array1.length; countThree++){
            addition = array1[count] + array1[countTwo] + array1[countThree];
            if(addition == 0){
                console.log("the three number whose sum is equalto zero is: "+ array1[count] + " " + array1[countTwo] + " " + array1[countThree]);

            }
        }
    }
}
}
threeIntSum();