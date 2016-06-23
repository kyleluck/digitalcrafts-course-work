
function princess() {
  var adventures = [];

  function princeCharming() {
    return 'Prince Charming';
  }

  var unicorn = { horns: 1 };
  var d1 = 'Dragon 1';
  var d2 = 'Dragon 2';
  var dragons = [d1, d2];
  var squirrel = "Hello!";

  adventures.push('I called ' + princeCharming());
  adventures.push('I saw a unicorn with ' + unicorn.horns + ' horns.');
  adventures.push('I saw ' + dragons.length + ' dragons.');
  adventures.push('I saw a squirrel that said ' + squirrel);

  return {
    story: function() {
      var lastIndex = adventures.length - 1;
      return adventures[lastIndex];
    }
  };
}

var littleGirl = princess();
console.log(littleGirl.story());
