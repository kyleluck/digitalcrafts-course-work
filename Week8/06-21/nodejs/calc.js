var sum = 0;

process.argv.forEach(function(val, index) {
  if (index !== 0 && index !== 1) {
    sum += Number(val);
  }
});

if (isNaN(sum)) {
  console.log("Please enter a number!" + sum);
} else {
  console.log("The sum is: " + sum);
}
