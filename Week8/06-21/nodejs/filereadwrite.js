const fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, "utf8", function(err, data) {
  if (err) {
    console.log("There was an error: " + err);
  } else {
    fs.writeFile("hello-saved.txt", data.toUpperCase(), function(err) {
      if (err) {
        return console.log("There was an error writing: " + error);
      }
      console.log("The file was saved!");
    });
  }
});
