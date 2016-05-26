
## Odd Numbers
function isOdd(num){

  var myArray = [];
  for (var i= 0; i <num.length; i++){
    if ((num[i] % 2) !==0){
      myArray.push(num[i]);
    }
  }
  return myArray;
}
isOdd([3,5,6]);

## Positive Numbers
function isPositive(num){

  var myArray = [];
  for (var i= 0; i <num.length; i++){
    if (num[i] >= 0){
      myArray.push(num[i]);
    }
  }
  return myArray;
}
isPositive([3,-5,6]);

## Sum an Array
function isTotal(num){
  var total = 0;
  var myArray = [];
  for (var i= 0; i <num.length; i++){
    total += num[i];
  }
  return total;
}
isTotal([3,5,6]);

## Tip Calculator
function billCalculator(bill, service){
  var bill;
  var service;
  var totalBill;
  if ( service === "good"){
    totalBill= bill + (bill*0.2);
  }
  else if (service ==="fair"){
    totalBill = bill + (bill*0.15);
  }
  else if (service === "bad"){
    totalBill = bill + (bill* 0.1);
  }
  else {
    console.log("Please enter a valid bill")
  }
  return totalBill;
}
billCalculator(100,"good");

#Tims box

function timsBox(rows,cols){
  var cols;
  var rows;

  // Task 1: print top bun and the bottom bun:
  for (var i = 1; i<= rows; i++){
    var lineOfStars = "";
    if((i===1) || (i===rows)) {
      for(var j=0; j<cols; j++){
        lineOfStars +="*";
      }
    }
  //  The middle part is same for the number of times we want rows
    else{
     for(var j=0; j<cols; j++){
       if ((j===0)||(j===cols-1)){
         lineOfStars +="*"
        }
        else{
          lineOfStars += " ";
        }
      }
    }
    console.log(lineOfStars);
  }

}
timsBox(10,7);
