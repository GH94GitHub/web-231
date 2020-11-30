/*====================
; Title: Exercise 6.3
; Author: George Henderson
; Date: 29 November 2020
; Description: Demonstrates creating an object literal & then logging
; the properties on one line.
;====================*/

const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 6.3') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 6.3
  Date: 11/29/2020

  {id: 45564, name: Management, requestor: Jeff}
*/

// Variables - Object literal
let o = {
  id: 45564,
  name: 'Management',
  requestor: 'Jeff'
};

// Output - Logs the objects properties on one line
console.log('{id: ' + o.id + ', name: ' + o.name + ', requestor: ' + o.requestor + '}');
