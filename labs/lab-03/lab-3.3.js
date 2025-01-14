/**
 * Sort an integer array from min to max
Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
 */

let arr = [12, 34, 1, 16, 28];

for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        index = -1;
    }
}
console.log(`Sort array: ${arr}`)