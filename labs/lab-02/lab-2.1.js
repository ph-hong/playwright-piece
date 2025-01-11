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
const BMI = (weight / (height ** 2)).toFixed(1);
console.log(`BMI: ${BMI}`);

if (BMI < 18.5) {
    console.log(`\t --> Underweight`);

} else if (BMI <=24.9) {
    console.log(`\t --> Normal weight`)

} else if (BMI <= 29.9) {
    console.log(`\t --> Overweight`)

} else {
    console.log(`\t --> Obesity`)
}
