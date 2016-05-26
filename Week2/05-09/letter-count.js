/*
## Letter Count

Given a string, count the number of occurances of each letter in the alphabet. You can use this object literal to initialize the objects for counting.

#object #loop #string
*/

var letterCounts = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0
};
var string = "let us count number of characters in this string";

for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    continue;
  }
  letterCounts[string[i]] += 1;
}
for (char in letterCounts) {
  console.log(char + ": " + letterCounts[char]);
}
