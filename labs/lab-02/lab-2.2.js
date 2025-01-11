/**
 * Allow user to input a number, print out it’s an odd or even number
 */

const readline = require(`readline-sync`);
let number = Number(readline.question('Enter number: '));

if (number % 2 === 0) {
    console.log("It's an even number")
} else {
    console.log("It's an odd number")
}