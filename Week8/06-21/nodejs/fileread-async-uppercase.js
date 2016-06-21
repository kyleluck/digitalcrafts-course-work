const fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, "utf8", function(err, data) {
  if (err) {
    console.log("There was an error: " + err);
  } else {
    console.log(data.toUpperCase());
  }
});
