var fileSummary = require('./file-summary-module');
var filename = process.argv[2];
fileSummary(filename, function(err, summary) {
  if (err) {
    return console.error(err.message);
  }
  console.log('Line count:', summary.lineCount);
  console.log('Character count:', summary.charCount);
});

/*
Example output:

$ node file-summary-program.js hello.txt
Lines: 1
Characters: 13
$ node file-summary-program.js file-that-doesnt-exist.txt
ENOENT: no such file or directory, open 'file-that-doesnt-exist.txt'
*/
