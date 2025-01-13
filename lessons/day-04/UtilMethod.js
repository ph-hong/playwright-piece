// Support function
// Service function - Util Functions

// 3. argument
let isEvenNumber_ = isEvenNumber(3, 2);
// console.log(`Is 3 even number: ${isEvenNumber_}`);

// number: parameter -> Function Declaration
function isEvenNumber(number) {
    return number % 2 === 0
};

// Function expression
const isOddNumber = function (number) {
    return number % 2 !== 0
};

// Common JS module
module.exports = { 
    evenNum: isEvenNumber,
    oddNum: isOddNumber };