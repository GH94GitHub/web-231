/*========================
; Title: Exercise-4.3
; Author: George Henderson
; Date: 14 November 2020
; Description: Creates an array and filters the array in search for a specified string value
; if found it is logged.
;========================*/

// Start Program
const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 4.3') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 4.3
  Date: 11/14/2020

  -- DISPLAYING ARRAY ITEMS --
  Truck
  Car
  Boat
  Plane
  Jet

  -- SELECTED VALUE --
  Boat

  -- SELECTED VALUE --
  Jet
*/



// Variables
var vehicleArr = ['Truck', 'Car', 'Boat', 'Plane', 'Jet'];

// Functions
/*
Parameter: Array ('a')..
Side-Effect: Logs each element in array.
Description: Takes in an array and iterates over each element and logging it. */
function getCars(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}
/*
Parameters: Array ('a'), String ('sVal').
Side-Effects: Logs 'sVal' if it matches an element in 'a'.
Description: Takes in an Array & String and logs the String if it matches
a string element within the Array. */
function getValue(a, sVal) {
  for (let i = 0; i < a.length; i++) {
    if (sVal === a[i]) {
      console.log(a[i]);
      break;
    }
  }
}

// Output
console.log('-- DISPLAYING ARRAY ITEMS --');
getCars(vehicleArr);
console.log('');

console.log('-- SELECTED VALUE --');
getValue(vehicleArr, 'Boat');

console.log('\n-- SELECTED VALUE --');
getValue(vehicleArr, 'Jet');

// End Program
