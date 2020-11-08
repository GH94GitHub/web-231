const header = require("../henderson-header.js");
/*==========================
; Title: Assignment 3.4
; Author: George Henderson
; Date: 08 November 2020
; Description: Creates a loop that iterates 10 times. In each loop a random number is created (1-10),
; & then tested to see if it matches the test variable 'num'. Logs a message each iteration stating
; if the number does/does not match.
;==========================*/

// Start Program
console.log(header.display("George", "Henderson", "Assignment 3.4") + "\n");

/*
  Expected Output:

  George Henderson
  Assignment 3.4
  Date: 11/8/2020

  -- DO THE NUMBERS MATCH GAME --
  5 does not match 7!
  5 does not match 10!
  5 does not match 2!
  5 does not match 10!
  5 does match 5!
  5 does not match 9!
  5 does not match 9!
  5 does not match 8!
  5 does match 5!
  5 does not match 3!
*/

// Variables
let num = 5;

// Functions
// Check if arguments match in value/type. Returns: boolean.
function match(a,b) {
  if (a===b)
    return true;
  else
    return false;
}

// Logs a message stating arguments [do not] match.
function logMismatch(a,b) {
  console.log(a + " does not match " + b + "!");
}
function logMatch(a,b) {
  console.log(a + " does match " + b + "!");
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// Output
console.log(" -- DO THE NUMBERS MATCH GAME --");
for(let i = 0; i < 10; i++) {
  let randNum = randomNumber();

  if (match(num, randNum))
    // Output
    logMatch(num, randNum);
  else
    // Output
    logMismatch(num, randNum);
}
