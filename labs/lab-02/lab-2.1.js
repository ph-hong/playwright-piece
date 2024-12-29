/**
 * Calculate BMI
 * Underweight: <18.5
 * Normal weight: 18.5 – 24.9
 * Overweight: 25–29.9
 * Obesity: BMI of 30 or greater
 */

const readline = require(`readline-sync`);

let weight = Number(readline.question('Enter your weight (kg): '));
let height = Number(readline.question('Enter your height (m): '));
let bmi = (weight / (height ** 2)).toFixed(1);
console.log(`BMI: ${bmi}`);

let isNormalRange = bmi >= 18.5 && bmi <= 24.9;
let isOverweightRange = bmi >= 25 && bmi <= 29.9;
let isStateEligible = true;

if (bmi < 18.5) {
    console.log("You're underweight");

} else if (isNormalRange == isStateEligible) {
    console.log("You're healthy")

} else if (isOverweightRange == isStateEligible) {
    console.log("You're overweight")

} else {
    console.log("You're obesity")
}
