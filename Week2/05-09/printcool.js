function printing(num, char) {
  var str = "";
  for (var i = 0; i < num; i++) {
    str += char;
  }
  console.log(str);
}

var startTime = Date.now();

while (Date.now() - startTime < 6000) {
  printing(20, " \\  \\ \\ \\ \\  ");
  printing(20, "  \\  \\ \\ \\ \\  ");
  printing(20, "  //  // // // //  ");
  printing(20, " //  // // // // ");
}
