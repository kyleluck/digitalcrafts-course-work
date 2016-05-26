var currentNumber;
var operator;

$(function() {

  var display = $('#display');
  var values = [];

  $('.number').click(function() {
    var number = $(this).text();
    var currentInput = display.val();
    display.val(currentInput + number);
  });

  $('.clear').click(function() {
    display.val("");
  });

  $('.operator').click(function() {
    currentNumber = Number(display.val());
    operator = $(this).text();
    display.val(currentNumber + " " + operator + " ");
  });

  $('.evaluate').click(function() {
    var currentDisplay = display.val();
    var result;
    if (operator && currentNumber) {
      if (operator === "X") {
        var nums = currentDisplay.split(" X ");
        result = nums[0] * nums[1];
      }
      else if (operator === "-") {
        var nums = currentDisplay.split(" - ");
        result = nums[0] - nums[1];
      }
      else if (operator === "/") {
        var nums = currentDisplay.split(" / ");
        result = nums[0] / nums[1];
      }
      else if (operator === "+") {
        var nums = currentDisplay.split(" + ");
        result = Number(nums[0]) + Number(nums[1]);
      }
      display.val(result);
    }
    else {
      display.val("");
    }
  });
});
