/*====================
; Title: Assignment 6.4
; Author: George Henderson
; Date: 29 November 2020
; Description: Demonstrates Initializing a nested loop and accessing
; most of it's variables.
;====================*/

/*
  Expected Output:

  George Henderson
  Assignment 6.4
  Date: 11/29/2020

  Ticket 1055 was created on 11/29/2020 and assigned to employee Jeff Jeffry (Manager).
*/
const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Assignment 6.4') + '\n');


// Variables - Initialize nested loop of ticket and the person that will be working on it.
  let ticket = {
    id: 1055,
    name: 'Programmer I',
    person: {
      id: 9,
      firstName: 'Jeff',
      lastName: 'Jeffry',
      jobTitle: 'Manager'
    },
    dateCreated: new Date(),
    priority: 3
  };

  // Output - log ticket information
  console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated.toLocaleDateString() + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' (' + ticket.person.jobTitle + ').')
