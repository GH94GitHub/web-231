/*====================
; Title: Exercise 6.2
; Author: George Henderson
; Date: 29 November 2020
; Description: Using try, catch & finally, this simple program demonstrates throwing an error
; & catching it.
;====================*/

const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 6.2') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 6.2
  Date: 11/29/2020

  Catch Clause: 18th element of array "nums" is not a number: "Jimbo"
  Finally clause reached...
*/

// Variables
// Initialize an array that has a string at the end & variable to hold the max number that appears through the array.
let nums = [1,2,3,4,5,5,6,7,2,5.45,5,3,4,6,3,4,7,2,'Jimbo'];
let max = -Infinity;

// Try, Catch, Finally
// Go through nums array & find max of numbers, if element being questioned is NaN throw an error to be caught & log the error.
try {
  for (let i = 0; i < nums.length; i++) {
    if (typeof(nums[i]) == 'number') {
      if (nums[i] > max)
        max = nums[i]
    }
    else {
      throw new Error(i + 'th element of array "nums" is not a number: "' + nums[i] + '"');
    }
  }
}
catch(e) {
  console.log('Catch Clause: ' + e.message);
}
finally {
  console.log('Finally clause reached...');
}
