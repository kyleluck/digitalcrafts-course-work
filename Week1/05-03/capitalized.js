var s = "this is a string";
var words = s.split(" ");
var temp;
var arr = [];

for(var i = 0; i < words.length; i++) {
  temp = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  arr.push(temp);
}
console.log(arr.join(" "));
