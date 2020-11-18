/*=========================
; Title: Exercise 5.2
; Author: George Henderson
; Date: 17 November 2020
; Description: Creates an array of 5 foods & iterates
; over the array with .forEach() to log each element.
;=========================*/


// Start Program
const header = require("../henderson-header.js");
console.log(header.display('George', 'Henderson', 'Exercise 5.2') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 5.2
  Date: 11/17/2020

  Mexican
  Chinese
  American
  Italian
  Japanese
*/

// Variables
let foodArr = ['Mexican', 'Chinese', 'American', 'Italian', 'Japanese'];

// Logs each element in the foodArr
foodArr.forEach(function(x) {
  console.log(x);
})
// End Program
