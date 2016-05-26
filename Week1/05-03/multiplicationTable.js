var line = "";
var result;

//console.log("x 1 2 3 4 5 6 7 8 9 10 11 12");
for(var i = 1; i <= 12; i++) {
	for(var j = 1; j <= 12; j++) {
    result = i * j;
    line = line + " " + result;
	}
  console.log(line);
  line = "";
}
