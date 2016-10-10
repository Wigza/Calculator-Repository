$(document).ready(start);

// var resultCLear = 0
var displayValue = 0
var storedValue = 0

function start() {
  displayResult();
  runCalculator();
}

function runCalculator() {
  $('#numbers > div').not('#decimal, #clear').click(getButtonValue);
  $('#addition').click(addValue);
  $('#equals').click(showTotalValue);
  $('#equals').click(calculateResult);
  $('#clear').click(clearInitialTotal);
}

function calculateResult() {
  var calculatedResult = parseInt(displayValue) + storedValue;
  $('#result').text(calculatedResult);
}

function showTotalValue() {
  $('#result').text()
}

function addValue() {
  storedValue = parseInt(displayValue);
  clearInitialTotal();
}


function getButtonValue() {
  var buttonValue = $(this).text();
  if(displayValue == 0) {
    displayValue = buttonValue;
  } else {
    displayValue = displayValue + buttonValue;
  }
  displayResult();
}

function displayResult() {
  $('#result').text(displayValue);
}

function clearInitialTotal() {
  displayValue = 0
  $('#result').text(displayValue);
}
