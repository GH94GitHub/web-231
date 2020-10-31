const header = require("../henderson-header.js");
/*==================
; Title: Assignment 2.4 - Functions
; Author: George Henderson
; Date: 30 October 2020
; Description: Creates various functions and invokes them to produce specified output
;==================*/

// start program

/*
  Expected Output:


  George Henderson
  Assignment 2.4
  Date: 10/30/2020

  George Henderson
  30 October 2020
  12.346
  77
  77.45678

*/

// variables
let firstName = "George";
let lastName = "Henderson";

let year = "2020";
let day = "30";
let month = "October";

let number = 12.3456789

let numString = "77.45678";

// functions
// Concatenates firstName and lastName and returns it
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
// Concatenates day, month & year and returns it
function dateWriter(year, month, day) {
  return day + ' ' + month + ' ' + year;
}
// Takes a number and converts it to specified fixed points specified by the second parameter
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}
// Takes a string and attempts to convert it into an integer
function convertToInt(str) {
  return parseInt(str);
}
//Takes a string and attempts to convert it into a floating point
function convertToFloat(str) {
  return parseFloat(str);
}

// output
console.log(header.display("George", "Henderson", "Assignment 2.4"));
console.log("\n");
console.log(fullName(firstName, lastName));
console.log(dateWriter(year, month, day));
console.log(formatNumber(number, 3));
console.log(convertToInt(numString));
console.log(convertToFloat(numString));

// end program
