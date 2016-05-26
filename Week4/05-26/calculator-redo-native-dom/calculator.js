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

  document.body.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('number')) {
      var target = event.target;
      var number = target.textContent;
      var currentInput = display.value;
      display.value = currentInput + number;
    }
    else if (target.classList.contains('clear')) {
      display.value = '';
    }
    else if (target.classList.contains('operator')) {
      var target = event.target;
      var newNumber = Number(display.value);
      if (operator && currentNumber) {
        currentNumber = calculate(newNumber);
      }
      else {
        currentNumber = newNumber;
      }
      display.value = '';
      operator = target.textContent;
    }
    else if (target.classList.contains('evaluate')) {
      var newNumber = Number(display.value);
      if (operator && currentNumber) {
        currentNumber = calculate(newNumber);
        display.value = currentNumber;
      }
      else {
        display.value = '';
      }
      operator = null;
    }
    else if (target.classList.contains('decimal')) {
      var currentInput = Number(display.value);
      var displayWithDecimal = currentInput + ".";
      display.value = displayWithDecimal;
    }
  });
  //currentNumber = calculate(newNumber);
};
