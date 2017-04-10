console.log("hello main.js");
/*12+92=82
82+22=68
62+82=100
12+02+02=1.*/
var testNum= "19";
var splitIntoArray= testNum.split('');
console.log("splitIntoArray",splitIntoArray);
for (var i=0; i<splitIntoArray.length; i++){
    splitIntoArray[i]= Number(splitIntoArray[i]);
}
console.log("splitIntoArray",splitIntoArray);
var squareValues= [];
i=0;
while(i<splitIntoArray.length){
    var squared= splitIntoArray[i] * splitIntoArray[i];
    squareValues.push(squared);
    i++;
}
console.log(squareValues);




    
