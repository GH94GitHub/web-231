const header = require("../henderson-header.js");
/*==========================
; Title: Exercise 3.3
; Author: George Henderson
; Date: 08 November 2020
; Description: Uses a switch to determine the key that uses the keycode value given
; & then logs it.
;==========================*/

// Start Program
console.log(header.display("George", "Henderson", "Exercise 3.3") + "\n");

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  The enter key was pressed
*/

// Variable
let eventKeyCode = 13

// Output
// Determines which key was pressed by the given keycode and logs it.
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}

// End Program
