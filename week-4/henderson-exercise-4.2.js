/*==============================
; Title: Exercise 4.2
; Author: George Henderson
; Date: 14 November 2020
; Description: Creates an array then calls 'getFruit(a)' to iterate over the array
; and log each element.
;==============================*/

// Start Program
const header = require("../henderson-header.js");
console.log(header.display('George', 'Henderson', 'Exercise 4.2') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 4.2
  Date: 11/14/2020

  Apple
  Orange
  Lemon
  Grape
  Strawberry
*/

// Variable
let fruitArr = ['Apple', 'Orange', 'Lemon', 'Grape', 'Strawberry'];

// Function
/*
Parameter: Array.
Side-Effect: Logs each element in array
Description: Takes in an array and iterates over each element and logging it.*/
function getFruit(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}

// Output
getFruit(fruitArr);

// End Program
