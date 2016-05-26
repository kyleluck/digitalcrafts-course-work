/*
## Print a Box

Given a height and width, print a box consisting of * characters as its border. For example, given the height of 4 and the width of 6, you should print:

```
******
*    *
*    *
******
```

#loop #if #medium
*/

var height = 10;
var width = 20;
var row = "";

for (var i = 1; i <= height; i++) {
  for (var j = 1; j <= width; j++) {
    if (i === 1 || i === height) {
      row = row + "*";
    }
    else if (j === 1 || j === width){
      row = row + "*";
    }
    else {
      row = row + " ";
    }
  }
  console.log(row);
  row = "";
}
