try {
  setTimeout(function() {
    var c = a + b;
  }, 100);
} catch (e) {
  console.log('Caught error:', e.message);
}
