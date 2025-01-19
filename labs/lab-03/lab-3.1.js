/**
 * Count how many odd, even number(s) in an integer array
let intArr = [1, 2, 3, 4, 5];
Even numders: 2
Odd numbers: 3
 */

const { isEvenNumber } = require('../utils/ArrayHandle.js');

let intArr = [1, 2, 3, 4, 5];
let evenNum = 0;
let oddNum = 0;
let arrLength = intArr.length;

for (let index = 0; index < arrLength; index++) {
    const number = intArr[index];
    if (isEvenNumber(number)) {
        evenNum++;
    } else {
        oddNum++;
    }
}

console.log(`Total even number: ${evenNum}`);
console.log(`Total odd number: ${oddNum}`);