let myArray = [1, 2, 3, 4, 5];
// first element's index: 0
// last element's index: array's length -1

// Get the array's length
console.log(`Array's length: ${myArray.length}`);

//READ
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]); // 1 2 3 4 5
}

for (let index = myArray.length - 1; index >= 0; index--) {
    console.log(myArray[index]); // 5 4 3 2 1
}

// Undefined holes
// myArray.push(6,7)
// myArray[10] = 1000;
// console.log(myArray)
// console.log(myArray[9])

let removedValue = myArray.pop();
console.log(`removedValue: ${removedValue}`);
console.log(`After array: ${myArray}`);

// Ex:
for (let index = 0; index < myArray.length; index++) {
    myArray[index] = myArray[index] * 2;
}