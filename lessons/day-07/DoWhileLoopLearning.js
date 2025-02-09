const readline = require('readline-sync');

const randomNum = generateRandomNum();
let guessingTime = 0;
do {
    let userNum = getUserNum();
    if (userNum === randomNum) {
        console.log('Congrat!!')
        break;
    }
    guessingTime++;
} while (guessingTime < 3);

if (guessingTime === 3) {
    console.log('Chuc ban may man lan sau!');
} else {
    console.log('See you again!');
}

function getUserNum() {
    return Number(readline.question('Enter your number: '))
}

function generateRandomNum(){
    return Math.floor(Math.random() * 10 + 1);
}