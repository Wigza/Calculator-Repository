$(document).ready(start);

var result = 0;

function start() {
  writeResult()
}

// displays the current result

function writeResult() {
  $('#result').text(result);
}
