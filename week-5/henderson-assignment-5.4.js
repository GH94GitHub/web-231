/*=========================
; Title: Assignment 5.4
; Author: George Henderson
; Date: 19 November 2020
; Description: Creates an array of composers with relevant information
; & outputs them rating first and then genre first.
;=========================*/


// Start Program
const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Assignment 5.4') + '\n');

/*
  Expected Output:

  George Henderson
  Assignment 5.4
  Date: 11/19/2020

  -- COMPOSER BY RATING --
  Rating: 10
  Composer: Mozart

  Rating: 10
  Composer: Beethoven

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 7
  Composer: Copland

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Copland
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
let ratingArr = composerArr.map(composer => {return [ composer.rating, composer.lastName ]});
let genreArr = composerArr.map(composer => { return [composer.genre, composer.lastName ]});

// Output
console.log('-- COMPOSER BY RATING --');
ratingArr.forEach(comp => { console.log('Rating: ' + comp[0] + '\nComposer: ' + comp[1] + '\n')});

console.log('-- COMPOSER BY GENRE --');
genreArr.forEach(comp => { console.log('Genre: ' + comp[0] + '\nComposer: ' + comp[1] + '\n')});

// End Program
