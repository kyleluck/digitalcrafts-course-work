/*
## Print a Box II

Like "Print a Box", but make it prettier by using the follow unicode characters: ━, ┃, ┏, ┓, ┗, and ┛. A 4x6 box would look like:

```
┏━━━━┓
┃    ┃
┃    ┃
┗━━━━┛
```

#loop #if #medium
*/

var height = 10;
var width = 20;
var row = "";

for (var i = 1; i <= height; i++) {
  for (var j = 1; j <= width; j++) {
    if (i === 1) {
      if (j === 1) {
        row = row + "┏";
      }
      else if (j === width) {
        row = row + "┓";
      }
      else {
        row = row + "━";
      }
    }
    else if (i === height) {
      if (j === 1) {
        row = row + "┗";
      }
      else if (j === width) {
        row = row + "┛";
      }
      else {
        row = row + "━";
      }
    }
    else if (j === 1 || j === width){
      row = row + "┃";
    }
    else {
      row = row + " ";
    }
  }
  console.log(row);
  row = "";
}
