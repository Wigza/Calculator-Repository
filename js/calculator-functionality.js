$(document).ready(start);

var total = 0

function start() {
  $('#numbers > div').not('#decimal, #clear').click(getNumberValue);
  displayResult();
}

// retrieves the text value of the number div clicked and returns that value

function getNumberValue() {
  var numberValue = $(this).text();
  total = total + numberValue
  displayResult();
}

function displayResult() {
  $('#result').text(total);
}

function clearInitialTotal() {
  $('#result').text('');
}
