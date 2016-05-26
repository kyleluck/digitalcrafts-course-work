/*
Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", print the total bill with the tip included. The amount of tip given for each level of service is defined by:

```
"good" -> 20%
"fail" -> 15%
"bad"  -> 10%
*/

var bill = 75;
var service = "good";
var goodTip = .2;
var failTip = .15;
var badTip = .10;

if (service === "good") {
  var totalBill = bill + (bill * goodTip);
}
else if (service === "fail") {
  var totalBill = bill + (bill * failTip);
}
else if (service === "bad") {
  var totalBill = bill + (bill * badTip);
}

console.log(totalBill);
