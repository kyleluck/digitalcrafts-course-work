/*
## Even Numbers II

Given a number n print the sum of the even numbers between 1 and n. #loop #easy
*/

var n = 30;
var i = 1;
var sum = 0;

while (i <= n) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);
