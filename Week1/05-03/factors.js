/*
## Factors

Given a number, print its factors. What are factors? <https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number> #loop #math #if #medium
*/

var n = 10;
var result = [];

for (var i = 1; i <= n; i++) {
  if (n % i === 0) {
    result.push(i);
  }
}

console.log(result);
