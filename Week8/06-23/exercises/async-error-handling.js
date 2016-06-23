/*
## Async

Given this asyncAdd function:

function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    callback(x + y);
  }, 1000);
}

Use it to add two numbers. Then use it to add two strings, while gracefully handling any errors that occurs using the Node's error handling convention of checking the first parameter for an error.
*/

function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      callback(new Error('Arguments must be numbers'));
      return;
    }
    callback(null, x + y);
  }, 1000);
}

asyncAdd('1', 2, function(err, sum) {
  if (err) {
    console.log('Error: ', err.message);
    return;
  }
  console.log(sum);
});
