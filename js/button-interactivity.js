$(document).ready(start);

function start() {
  $(".number").hover(mouseOver, mouseOff);
  $(".number").mousedown(buttonClicked);
  $(".number").mouseup(buttonUnClicked);

  $("#equals").hover(equalsHoverOn, equalsHoverOff);
  $("#equals").mousedown(equalsClicked);
  $("#equals").mouseup(equalsUnClicked);
}

// Hover function for the number buttons

function mouseOver() {
  $(this).addClass('number-hover');
}

function mouseOff() {
  $(this).removeClass('number-hover');
}

// clicking function for the number buttons that adds a darker class to the button

function buttonClicked() {
  $(this).addClass('number-clicked');
}

function buttonUnClicked() {
  $(this).removeClass('number-clicked');
}

// equal button hover functions

function equalsHoverOn() {
  $(this).addClass('equals-hover');
}

function equalsHoverOff() {
  $(this).removeClass('equals-hover');
}


// equal button clicking functions

function equalsClicked() {
  $(this).addClass('equals-clicked');
}

function equalsUnClicked() {
  $(this).removeClass('equals-clicked');
}
