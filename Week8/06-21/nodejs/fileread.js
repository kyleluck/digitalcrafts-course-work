const fs = require('fs');
var fileName = process.argv[2];
var contents = fs.readFileSync(fileName, "utf8");
console.log(contents);
