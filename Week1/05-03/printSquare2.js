/*## Print a Square II

Given a positive number n, print a square of nxn of * characters.

#loop #medium
*/

var n = 15;
var row = "";

for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
  row = "";
}
