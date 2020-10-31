const header = require("../henderson-header.js");
/*========================
; Title: Exercise 2.3
; Author: George Henderson
; Date: 30 October 2020
; Description: myName function returns a property of itself
; and outputs to console.
;========================*/

// start program

/*
  Expected Output:

  George Henderson
  Exercise 2.3
  Date: 10/30/2020

  George Henderson
*/

// function properties
myName.george = "George Henderson";

// function
function myName() {
  return myName.george;
}

// output
console.log(header.display("George", "Henderson", "Exercise 2.3"));
console.log("\n");
console.log(myName());

// end program
