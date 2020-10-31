/*========================
; Author: George Henderson
; Date: 30 October 2020
; Description: myName function returns a property of itself
; and outputs to console.
;========================*/

/*
  Expected Output:

  George
*/


// start program

// function
function myName() {
  return myName.george;
}
myName.george = "George";

// output
console.log(myName());

// end program
