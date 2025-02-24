/**
 * 
 * Two sum
 * [3, 7, 22, 1], target number: 8
 * -> [1, 3] index
 */

// Brute force
/**
 outer loop index 0 -> 
    firstNum
    inner loop index +1 -> length - 1
        if(firstNum + current === target)
            return [firstIndex, secondIndex]
    return []
 */

// Time Complexity On^2
const givenArray = [3, 7, 22, 1];
const targetNum = 8;
let indices = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices);
function findIndicesUsingBruteForce(array, targetNum) {
    for (let firstNumIndex = 0; firstNumIndex < array.length - 1; firstNumIndex++) {
        const firstNum = array[firstNumIndex];
        for (let secondNumberIndex = firstNumIndex + 1; secondNumberIndex < array.length; secondNumberIndex++) {
            const secondNum = array[secondNumberIndex];
            if (secondNum === targetNum - firstNum) {
                return [firstNumIndex, secondNumberIndex];
            }

        }
    }
    return [];
}

// O(n)

let indices_1 = findIndicesUsingMap(givenArray, targetNum);
console.log(indices_1);
function findIndicesUsingMap(array, targetNum) {
    let numMap = new Map();
    for (let currentNumberIndex = 0; currentNumberIndex < array.length; currentNumberIndex++) {
        const currentNum = array[currentNumberIndex];
        const lookingNum = targetNum - currentNum;
        if (numMap.has(lookingNum)) {
            return [numMap.get(lookingNum), currentNumberIndex];
        }
        numMap.set(currentNum, currentNumberIndex);
    }
    return [];
}