$(document).ready(start);

// display variables for storing the number data users enter
var displayValue = 0
var storedValue = 0

// variables that hold the operator values
var addition = '+';
var subtract = '-';
var multiply = 'x';
var divide = '/';

// calculator result variable
var calculatedResult = ''

function start() {
  displayResult();
  runCalculator();
}

function runCalculator() {
  $('#numbers > div').not('#decimal, #clear').click(getNumberButtonValue);
  $('#operators > div').click(getOperatorValue);
  $('#addition').click(addValue);
  $('#equals').click(showTotalValue);
  $('#equals').click(calculateResult);
  $('#clear').click(clearInitialTotal);
}

function calculateResult() {
  var calculatedResult = parseInt(displayValue) + storedValue;
  $('#result').text(calculatedResult);
  displayValue = calculatedResult;
}

function additionFunction() {
  var result = storedValue + parseInt(displayValue);
  return result
}

function subtractionFunction() {
  var result = storedValue - parseInt(displayValue);
  return result
}

function multiplyFunction() {
  var result = (storedValue) * (parseInt(displayValue));
  return result
}

function divisionFunction() {
  var result = storedValue / parseInt(displayValue);
  return result
}

function showTotalValue() {
  $('#result').text()
}

function addValue() {
  storedValue = parseInt(displayValue);
  clearInitialTotal();
}

function getOperatorValue() {
  var operatorValue = $(this).text();
  // runs through a series of if statements to
  // determine the value of the operator butten
  // pressed.
  if (operatorValue == '+') {
    operatorValue = addition;
    additionFunction(operatorValue)
  } else if (operatorValue == '-') {
    operatorValue = subtract;
    console.log(operatorValue);
    return operatorValue;
  } else if (operatorValue == 'x') {
    operatorValue = multiply;
    console.log(operatorValue);
    return operatorValue;
  } else if (operatorValue == '/') {
    operatorValue = divide;
    console.log(operatorValue);
    return operatorValue;
  }
}


function getNumberButtonValue() {
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
