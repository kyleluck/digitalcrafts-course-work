function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    callback(x + y);
  }, 1000);
}

try {
  asyncAdd('a', 'b', function(answer) {
    console.log('The answer is', answer);
  });
} catch (e) {
  console.log('Caught error:', e.message);
}

// Don't muffle errors
