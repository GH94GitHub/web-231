/*
==============================
; Title: Assignment 1.5
; Author: George Henderson
; Date: 25 October 2020
; Description: Demonstrates usage of Types, Values and Variables
;==============================
*/

// start program

/*
    Expected Output:
    
    -- Displaying Employee Records --

    {
        First Name: {employee.firstName}

        Last Name: {employee.lastName}

        Address: {employee.address}

        Pay Rate: {employee.payRate}

        Hire Date: {employee.hireDate}
    }   x3 One for every employee
*/

// variables
let employee1 = {
    firstName: 'George',
    lastName: 'Henderson',
    address: '906 East 31st ST',
    payRate: 125.57,
    hireDate: new Date().toLocaleDateString('en-US')
}
let employee2 = {
    firstName: 'Jerry',
    lastName: 'Doughnuts',
    address: '123 Dunken Street',
    payRate: 26.45,
    hireDate: new Date().toLocaleDateString('en-US')
}
let employee3 = {
    firstName: 'Jim',
    lastName: 'Corus',
    address: '678 Jenkins Rd',
    payRate: 5.89,
    hireDate: new Date().toLocaleDateString('en-US')
}

// function
function logEmployee(employee) {
    console.log('First Name: ' + employee.firstName + '\n');
    console.log('Last Name: ' + employee.lastName + '\n');
    console.log('Address: ' + employee.address + '\n');
    console.log('Pay Rate: ' + employee.payRate.toFixed(1) + '\n');
    console.log('Hire Date: ' + employee.hireDate + '\n\n');
}

// output
console.log('-- Displaying Employee Records --\n\n');

logEmployee(employee1);
logEmployee(employee2);
logEmployee(employee3);
// end program