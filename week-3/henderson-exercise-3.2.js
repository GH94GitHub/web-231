const header = require("../henderson-header.js");
/*==============================
; Title: Exercise 3.2
; Author: George Henderson
; Date: 08 November 2020
; Description: Checks two test variables for matching value & type and
; logs a message indicating if they do/don't.
;==============================*/

// Start Program
console.log(header.display("George", "Henderson", "Exercise 3.2") + "\n");

/*
  Expected Output:

  George Henderson
  Exercise 3.2
  Date: 11/8/2020

  25 and 25 do not match!
*/

// Variables
let hisName = "Tony";
let herName = "Kayla";
let myName = "Tony";
let hisAge = 25;
let herAge = "25";
let myAge = 25.00;
let test1, test2;


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
  console.log(a + " and " + b + " do not match!");
}
function logMatch(a,b) {
  console.log(a + " and " + b + " match!");
}

test1 = hisAge;
test2 = herAge;
if (match(test1, test2))
  // Output
  logMatch(test1, test2);
else
  // Output
  logMismatch(test1, test2);

// End Program
