var currentNumber;
var operator;

function calculate(newNumber) {
  var result;
  if (operator === "X") {
    result = currentNumber * newNumber;
  }
  else if (operator === "-") {
    result = currentNumber - newNumber;
  }
  else if (operator === "/") {
    result = currentNumber / newNumber;
  }
  else if (operator === "+") {
    result = currentNumber + newNumber;
  }
  return result;
}

window.onload = function() {

  var display = document.getElementById('display');

  var numberKeys = document.getElementsByClassName('number');
  for (var i = 0; i < numberKeys.length; i++) {
    numberKeys[i].addEventListener('click', function(event) {
      var target = event.target;
      var number = target.textContent;
      var currentInput = display.value;
      display.value = currentInput + number;
    });
  }

  var clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', function() {
    display.value = '';
  });

  var operatorButtons = document.getElementsByClassName('operator');
  for (var j = 0; j < operatorButtons.length; j++) {
    operatorButtons[j].addEventListener('click', function(event) {
      var target = event.target;
      var newNumber = Number(display.value);
      if (operator && currentNumber) {

      }
      else {
        currentNumber = newNumber;
      }
      display.value = '';
      operator = target.textContent;
    });
  }

  var evaluateButton = document.querySelector('.evaluate');
  evaluateButton.addEventListener('click', function() {
    var newNumber = Number(display.value);
    if (operator && currentNumber) {
      currentNumber = calculate(newNumber);
      display.value = currentNumber;
    }
    else {
      display.value = '';
    }
    operator = null;
  });

  var decimalButton = document.querySelector('.decimal');
  decimalButton.addEventListener('click', function() {
    var currentInput = Number(display.value);
    var displayWithDecimal = currentInput + ".";
    display.value = displayWithDecimal;
  });

  // $('.decimal').click(function() {
  //   var currentInput = Number(display.val());
  //   var displayWithDecimal = currentInput + ".";
  //   display.val(displayWithDecimal);
  // });
};
