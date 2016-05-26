//Given a number, print "Odd" if that number is odd, and print "Even" if that number is even. #if #easy

var num = Math.floor(Math.random() * 10);
console.log(num);
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
