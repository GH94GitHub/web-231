/*=======================
; Title: Assignment 4.4
; Author: George Henderson
; Date: 14 November 2020
; Description: Creates an array filled with 5 states and logs the array.
; Logs the original array sorted alphabetically, and then filters the array
; finding a specific value and logs the value;
;=======================*/

// Start Program
const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Assignment 4.4') + '\n');

/*
  Expected Output:

  George Henderson
  Assignment 4.4
  Date: 11/14/2020

  -- Original Array --
  Nebraska
  Iowa
  Texas
  Maine
  Georgia

  --Sorted Array --
  Georgia
  Iowa
  Maine
  Nebraska
  Texas

  -- Selected Value --
  Nebraska
*/

// Variables
let statesArr = ['Nebraska', 'Iowa', 'Texas', 'Maine', 'Georgia'];
let selectedValue = 'Nebraska';
let filteredArr = statesArr.filter(function(x) {
  return getState(x, selectedValue);
});

// Functions
/*
Parameters: 2 Strings
Returns: Boolean
Description: Takes in 2 strings & returns a boolean stating if they [do not] match. */
function getState(s1, s2) {
  if (s1 === s2) return true;
}
/*
Parameters: Array
Side-Effects: Logs each element in array
Description: Takes in an array and logs each element of the array
on a new line. */
function logStates(a) {
  for (let i = 0; i < a.length; i++){
    console.log(a[i]);
  }
}

// Output
console.log('-- Original Array --');
logStates(statesArr);
console.log('');

console.log('--Sorted Array --');
logStates(statesArr.sort());
console.log('');

console.log('-- Selected Value --');
logStates(filteredArr);

// End Program
