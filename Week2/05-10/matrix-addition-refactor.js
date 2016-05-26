function matrixAdd(m1, m2) {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
    var row = [];
    for (var j = 0; j < m1[i].length; j++) {
      var sum = m1[i][j] + m2[i][j];
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}

var m1 = [
  [1, 2],
  [3, 4]
];
var m2 = [
  [5, 6],
  [7, 8]
];

console.log('Result is ', matrixAdd(m1, m2));
