var fileSummary = require('file-summary-kyle');
var filename = process.argv[2];
fileSummary(filename, function(err, summary) {
  if (err) {
    return console.error(err.message);
  }
  console.log('Line count:', summary.lineCount);
  console.log('Character count:', summary.charCount);
});
