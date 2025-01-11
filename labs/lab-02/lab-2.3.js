/**
 * Calculate BMI
 * Underweight: <18.5
 * Normal weight: 18.5 – 24.9
 * Overweight: 25–29.9
 * Obesity: BMI of 30 or greater
 * Suggest user to increase/decrease weight
 */

const readline = require(`readline-sync`);

let weight = Number(readline.question('Enter your weight (kg): '));
let height = Number(readline.question('Enter your height (m): '));
const BMI = (weight / (height ** 2)).toFixed(1);
console.log(`BMI: ${BMI}`);

let isUnderW = false;
let isOverW = false;

if (BMI < 18.5) {
    isUnderW = true;
    console.log(`\t--> Underweight`)

} else if (BMI <= 24.9) {
    console.log("You're healthy!! 💯")

} else if (BMI <= 29.9) {
    isOverW = true;
    console.log(`\t--> Overweight`)

} else {
    isOverW = true;
    console.log(`\t--> Obesity`)
}

// Handle for weight suggestion if any
if (isUnderW) {
    let suggestW = (18.5 * (height ** 2)).toFixed(3);
    let increaseW = suggestW - weight;
    let normalBMIMin = (18.5 - BMI).toFixed(1);
    let normalBMIMax = (24.9 - BMI).toFixed(1);
    let gainWMin = Number((normalBMIMin * (height ** 2)).toFixed(1));
    let gainWMax = Number((normalBMIMax * (height ** 2)).toFixed(1));
    let suggestWMin = weight + gainWMin;
    let suggestWMax = weight + gainWMax;
    console.log(`\t --> You should gain in range ${gainWMin} ~ ${gainWMax} (kg).
    \t --> Healthy weight suggestion: ${suggestWMin} up to ${suggestWMax} (kg)
    \t --> You should increase min: ${increaseW} (kg)`);
}

if (isOverW) {
    let suggestW = (24.9 * (height ** 2)).toFixed(3);
    let decreaseW = weight - suggestW;
    let normalBMIMin = (BMI - 24.9).toFixed(1);
    let normalBMIMax = (BMI - 18.5).toFixed(1);
    let loseWMin = Number((normalBMIMin * (height ** 2)).toFixed(1));
    let loseWMax = Number((normalBMIMax * (height ** 2)).toFixed(1));
    let suggestWMin = weight - loseWMin;
    let suggestWMax = weight - loseWMax;

    console.log(`\t --> You should lose in range ${loseWMin} ~ ${loseWMax} (kg).
    \t --> Healthy weight suggestion: ${suggestWMax} ~ ${suggestWMin} (kg)
    \t --> You should decrease min: ${decreaseW} (kg)`);

}