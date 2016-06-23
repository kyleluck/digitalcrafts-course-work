
function f1() {
  var v1 = 1;
  var v2 = 2;

  function f2(p1, p2) {
    var v1 = 3;

    function f3(p1) {
      var v2 = 4;
      var v3 = 5;

    }
    f3(8);
  }

  f2(6, 7);
}

f1();

function f4() {
  var v4 = 9;
  var v5 = 10;
}

f4();
