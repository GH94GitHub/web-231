/*=========================
; Title: Exercise 5.3
; Author: George Henderson
; Date: 17 November 2020
; Description: Creates an array of 5 composer objects with appropriate properties
; & then uses the forEach() function to output details about each composer in the array.
;=========================*/


// Start Program
const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 5.3') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 5.3
  Date: 11/17/2020

  -- COMPOSERS --
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Beethoven, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Copland, Genre: Classical, Rating: 7
*/

// Variable (An array with 5 composer objects)
let composerArr = [
  { // 0
    'firstName': 'Wolfgang',
    'lastName': 'Mozart',
    'genre': 'Classical',
    'rating': 10
  },
  {// 1
    'firstName': 'Ludwig',
    'lastName': 'Beethoven',
    'genre': 'Classical',
    'rating': 10
  },
  {// 2
    'firstName': 'Johann',
    'lastName': 'Bach',
    'genre': 'Classical',
    'rating': 9
  },
  {// 3
    'firstName': 'Joseph',
    'lastName': 'Haydn',
    'genre': 'Classical',
    'rating': 6
  },
  {// 4
    'firstName': 'Aaron',
    'lastName': 'Copland',
    'genre': 'Classical',
    'rating': 7
  }
];

// Output
console.log('-- COMPOSERS --');
  // Logs: Last Name; Genre; and Rating, of each composer element in the array.
composerArr.forEach(function(composer) {
  console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating);
});

// End Program
