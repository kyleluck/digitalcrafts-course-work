/*
## Print a Triangle

Print a triangle consisting of * characters like this:

```
   *
  ***
 *****
*******
```
*/

for (var i = 1; i <= 4; i++) {
  if (i === 1) {
    console.log("   *   ");
  }
  else if (i === 2) {
    console.log("  ***  ");
  }
  else if (i === 3) {
    console.log(" ***** ");
  }
  else {
    console.log("*******");
  }
}
