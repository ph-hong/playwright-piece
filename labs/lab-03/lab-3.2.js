/**
 * Finding maximum value/minimum value from an integer array
let intArr = [1, 2, 3, 4, 5];
Minimum: 1
Maximum: 5
 */

let intArr = [1, 2, 3, 4, 5];

let min = intArr[0];
let max = intArr[0];
let arrLength = intArr.length;

for (let index = 0; index < arrLength; index++) {
    const value = intArr[index];
    if (value > max) {
        max = value;
    };
    if (value < min) {
        min = value
    }
}

console.log(`Min number: ${min} \nMax number: ${max}`)
