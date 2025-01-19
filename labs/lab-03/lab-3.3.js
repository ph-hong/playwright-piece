/**
 * Sort an integer array from min to max
Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
 */

const { swap } = require('../utils/ArrayHandle.js');
let arr = [12, 34, 1, 16, 28];
let len = arr.length;

// for (let index = 0; index < arrLength; index++) {
//     if (arr[index] > arr[index + 1]) {
//         let temp = arr[index];
//         arr[index] = arr[index + 1];
//         arr[index + 1] = temp;
//         index = -1;
//     }
// }

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        const leftValue = arr[j];
        const rightValue = arr[j + 1];
        const isWrongPlace = leftValue > rightValue;

        if (isWrongPlace) {
            swap(arr, j)
        }
    }
}

console.log(`Sort array: ${arr}`)