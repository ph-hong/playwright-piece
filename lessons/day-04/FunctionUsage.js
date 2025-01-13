// const UtilMethods = require('./UtilMethod');

// Destructure
const { isEvenNumber,
        isOddNumber
} = require('./UtilMethod.js');

// Get an user inout then check if it's even or odd num
let userInput = getUserInput();
let isEvenNumber_ = isEvenNumber(userInput);

if (isEvenNumber_) {
    console.log(`The number ${userInput} is an even number`)
} else {
    console.log(`The number ${userInput} is an odd number`)
}

function getUserInput(){
    return 4;
}