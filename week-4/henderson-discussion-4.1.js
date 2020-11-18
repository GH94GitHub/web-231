/*=========================
; Title: Discussion 4.1
; Author: George Henderson
; Date: 12 November 2020
; Description: Simple program using arrays that produces two errors
; that need to be fixed.
=========================*/

// Start Program

/*
  Expected Output:

  Rolling...

  85's Jackpot! (optional)
  98's Jackpot! (optional)
  Max amount of similar numbers: 4
  6 numbers between 0 & 25 inclusive: 1-7-8-17-24-25

*/

 "use strict"
  // Variables
  let arr = [];
  let filteredArr = [];
  let obj = {
    max: 0,
  };

  // Function
  // Returns: Array
  // Parameters: Array, Integer, Integer
  // Description: Takes in an Array and returns a filtered array who's elements are between 'startNumber' & 'endNumber inclusive.
  function filterBetween(a, startNumber, endNumber) {
    let lowestNum;
    let highestNum;
    let tempArr = [];

    if (startNumber > endNumber) {
      lowestNum = endNumber;
      highestNum = startNumber;
    }
    else {
      lowestNum = startNumber;
      highestNum = endNumber
    }

    return a.filter(x >= lowestNum && x <= highestNum); //! take away 'function(x) { return}'
  }

  // Initialize 30 elements in 'arr', each with a random number between 0 - 100
  // Keep a tally of each number in 'obj'
  for (let i = 0; i < 30; i++) {
    arr[i] = Math.floor(Math.random() * 101);

    if (obj[arr[i]])
      obj[arr[i]]++;
    else
      obj[arr[i]] = 1;
  }

  // Output
  console.log("Rolling...\n");

  // Keep track of the highest tally an individual number has
  // If one number was initialized 3 times or more, log 'Jackpot!'
  for (prop in obj) { //! remove let
    if (prop == "max") continue;
    if (!obj[prop]) {
      throw new Error("obj.prop is undefined"); //! should be obj[prop] not obj.prop
    }
    if (obj[prop] > obj.max) {
      obj.max = obj[prop];
    }
    if (obj[prop] >= 3) {
      // Output
      console.log(prop + "'s Jackpot!");
    }
  }
  // Output
  console.log("Max amount of similar numbers: " + obj.max);
  console.log(filterBetween(arr, 0, 25).length + " numbers between 0 & 25 inclusive: " + filterBetween(arr, 0, 25).sort(function(a, b) {return a - b}).join("-"));

// End Program
