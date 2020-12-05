/*=================
; Title: Exercise 7.2
; Author: George Henderson
; Date: 04 December 2020
; Description: JavaScript program that demonstrates using a constructor function to initialize
; an array that is then logged.
;=================*/
const header = require('../henderson-header.js');
console.log(header.display('George', 'Henderson', 'Exercise 7.2') + '\n');

/*
  Expected Output:

  George Henderson
  Exercise 7.2
  Date: 12/4/2020

  1 Jeff Jeffry Manager
  2 Kristina Kristi Waitress
  3 John Johnson Waiter
  4 Jake Jakinson Bell Boy
  5 Tina Smith Supervisor
*/


// Variables (Creates an array and initializes it with 5 objects using the employee constructor function).
let employeeArr = [
new employee(1, 'Jeff', 'Jeffry', 'Manager'),
new employee(2, 'Kristina', 'Kristi', 'Waitress'),
new employee(3, 'John', 'Johnson', 'Waiter'),
new employee(4, 'Jake', 'Jakinson', 'Bell Boy'),
new employee(5, 'Tina', 'Smith', 'Supervisor')
];

//Function - Constructor (Creates an employee object that contains relevant information).
function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// Output
for (let emp of employeeArr) {
  console.log(emp.id + ' ' + emp.firstName + ' ' + emp.lastName + ' ' + emp.title);
}
