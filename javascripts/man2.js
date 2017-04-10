var testThisNumber= '19';

function splitValues(passedValue){
    
    
    var arrayOfNumbers= passedValue.split("");
    for (var i=0; i<arrayOfNumbers.length; i++){
        arrayOfNumbers[i]= Number(arrayOfNumbers[i]);
    }
    return arrayOfNumbers;
}

function squareAndAdd(passedValue){
    var processVal= [];
    i=0;
    while(i<passedValue.length){
        var squared= passedValue[i] * passedValue[i];
        processVal.push(squared);
        i++;
    }
    var allTogether=0;
    for(var i=0; i<processVal.length; i++){
        allTogether= allTogether + processVal[i];
    }
    return allTogether;
}

function checkHappy (passedValue){
    if(passedValue === 1){
        console.log(testThisNumber, "is a happy number");
    }else{
        var checkDigits= passedValue.toString();
        if(checkDigits.length ===1){
            console.log(testThisNumber, "is a sad number maybe");
        }else{
            checkDigits= splitValues(checkDigits);
            var newNumber= squareAndAdd(checkDigits);
            checkHappy(newNumber);
        }
     }

 }
 //var is Happy = splitValues(testThisNumber);
// is Happy = squareAndAdd(is Happy);
 //is Happy = checkHappy(is Happy);

 var button = document.get ElementById("btn-checkvalue");

 button.addEventListener("click", function() {
    console.log("clicked", document.getElementById("numberval").valuue;
        var testThis = spelitValue(inpuynumber);
        testThis =squareAndAdd(testThis);
        testThis = checkHappy(testThis);
    });