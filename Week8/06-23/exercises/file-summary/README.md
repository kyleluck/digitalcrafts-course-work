# Just a demo

## Usage
```
// require module
var fileSummary = require('file-summary-kyle');

// get filename from CLI input
var filename = process.argv[2];

//call fileSummary with filename and callback
fileSummary(filename, function(err, summary) {
  if (err) {
    return console.error(err.message);
  }
  console.log('Line count:', summary.lineCount);
  console.log('Character count:', summary.charCount);
});
```
