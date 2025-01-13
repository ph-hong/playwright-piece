const readline = require('readline-sync');
// DRY
// SOLID: Single Responsibility -> Tinh don nhiem

// function name: action , camelCase, 
//  Declare a function

// Method 01: [Function Declaration] method | hoisting
let userInputNum = getUserInputNumber();
let inputNum = convertToNumber(userInputNum);
evaluateEvenOrOddNumber(inputNum);

function getUserInputNumber() {
    let inputNum = readline.question('Your num: ')
    return inputNum;
}

function convertToNumber(str) {
    return Number(str);
}

function evaluateEvenOrOddNumber(num) {
}

let returnValue = functionName()
function functionName() {
    return 1;
}

// Method 02: [Function Declaration] method | NO hoisting
const addNumber = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
let sum = addNumber(1, 2);

