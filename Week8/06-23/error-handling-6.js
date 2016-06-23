function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      callback(new Error('Arguments must be numbers'));
      return;
    }
    callback(null, x + y);
  }, 1000);
}

try {
  asyncAdd('a', 'b', function(err, answer) {
    if (err) {
      console.log('Caught error ' + err.message);
      return;
    }
    console.log('The answer is', answer);
  });
} catch (e) {
  console.log('There was an error:', e.message);
}

// Don't muffle errors
