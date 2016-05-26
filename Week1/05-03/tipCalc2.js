var numberOfPeople = 5;
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

console.log(totalBill / numberOfPeople);
