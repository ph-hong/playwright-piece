const { evenNum} = require('./UtilMethod.js');
let myArray = [1, 2, 3, 4, 5];

// Filter to get even numbers from array
// Higher order Function: HOF
let evenNumbers = myArray.filter(evenNum);
console.log(evenNumbers);
