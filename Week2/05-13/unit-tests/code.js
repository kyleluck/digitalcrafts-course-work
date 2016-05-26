function hello (name) {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello!";
  }
}

function echo (string) {
  return string;
}

function shout (string) {
  return string.toUpperCase();
}

function repeat (string, n) {
  var result = '';
  if (n) {
    for (var i = 0; i < n; i++) {
      result += string + " ";
    }
  } else {
    result = string + " " + string;
  }
  return result.trim();
}

function start_of_word (word, numOfLetters) {
  return word.substring(0, numOfLetters);
}

function first_word (phrase) {
  var words = phrase.split(" ");
  return words[0];
}

function f2c (f) {
  return (f - 32) * 5 / 9;
}

function c2f (c) {
  return c * 9 / 5 + 32;
}

function repeatLoop (string, times) {
  var result = "";
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

function join (arr, delimiter) {
  if (delimiter) {
    return arr.join(delimiter);
  } else {
    return arr.join('');
  }
}

function sum (arr) {
  var sum = 0;
  arr.forEach(function (val) {
    sum += val;
  });
  return sum;
}

function paramify (obj) {
  var string = "";
  var sortArray = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      sortArray.push(key);
    }
  }
  sortArray.sort();
  for (i in sortArray) {
    var k = sortArray[i];
    var value = obj[k];
    string += k + "=" + obj[k] + "&";
  }
  if (string.charAt(string.length - 1) === "&") {
    string = string.substr(0, string.length - 1);
  }
  return string;
}

function factorial (factor) {
  if (factor === 0) {
    return 1;
  }
  else {
    return (factor * factorial(factor - 1));
  }
}
