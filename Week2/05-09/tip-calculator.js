/*
## Tip Calculator

Write a function that takes the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", and returns the total bill with the tip included. The amount of tip given for each level of service is defined by:

```
"good" -> 20%
"fail" -> 15%
"bad"  -> 10%
```

#easy
*/

function totalBill(amount, service) {
  var bill = 0;
  if (service === "good") {
    bill = amount * 1.2;
  }
  else if (service === "fail") {
    bill = amount * 1.15;
  }
  else {
    bill = amount * 1.1;
  }
  return bill;
}

console.log(totalBill(75, "good"));
