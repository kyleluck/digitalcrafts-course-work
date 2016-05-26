/* BEFORE
var counter = 0;
var n = 10;
var row = "";
while (counter < n) {
  row = row + "*";
  counter++;
}
counter = 0;
while (counter < n){
  console.log(row);
  counter++
}
*/

/* AFTER */
function printSquare(n, char) {
  var row = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      row += char;
    }
    console.log(row);
    row = "";
  }
}

printSquare(10, "#");
