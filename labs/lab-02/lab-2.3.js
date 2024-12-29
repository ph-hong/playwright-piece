/**
 * Calculate BMI
 * Underweight: <18.5
 * Normal weight: 18.5 – 24.9
 * Overweight: 25–29.9
 * Obesity: BMI of 30 or greater
 * Suggest user to increase/decrease weight
 */

const readline = require(`readline-sync`);

let weight = Number(readline.question('Your weight (kg): '));
let height = Number(readline.question('Your height (m): '));
let bmi = (weight / (height ** 2)).toFixed(1);
console.log(`BMI: ${bmi}`);

let isNormalRange = bmi >= 18.5 && bmi <= 24.9;
let isOverweightRange = bmi >= 25 && bmi <= 29.9;
let isStateEligible = true;

if (bmi < 18.5) {
    let normalBMIMin = (18.5 - bmi).toFixed(1);
    let normalBMIMax = (24.9 - bmi).toFixed(1);
    let gainWeightSuggestionMin = Number((normalBMIMin * (height ** 2)).toFixed(1));
    let gainWeightSuggestionMax = Number((normalBMIMax * (height ** 2)).toFixed(1));
    let weightSuggestionMin = weight + gainWeightSuggestionMin;
    let weightSuggestionMax = weight + gainWeightSuggestionMax;

    console.log(`Underweight! you should gain in range ${gainWeightSuggestionMin} ~ ${gainWeightSuggestionMax} (kg).
        Healthy weight suggestion: ${weightSuggestionMin} up to ${weightSuggestionMax} (kg)`);

} else if (isNormalRange == isStateEligible) {
    console.log("You're healthy!! 💯")

} else if (isOverweightRange == isStateEligible) {
    let normalBMIMin = (bmi - 24.9).toFixed(1);
    let normalBMIMax = (bmi - 18.5).toFixed(1);
    let loseWeightSuggestionMin = Number((normalBMIMin * (height ** 2)).toFixed(1));
    let loseWeightSuggestionMax = Number((normalBMIMax * (height ** 2)).toFixed(1));
    let weightSuggestionMin = weight - loseWeightSuggestionMin;
    let weightSuggestionMax = weight - loseWeightSuggestionMax;

    console.log(`Overweight! you should lose in range ${loseWeightSuggestionMin} ~ ${loseWeightSuggestionMax} (kg).
        Healthy weight suggestion: ${weightSuggestionMax} ~ ${weightSuggestionMin} (kg)`);

} else {
    let overweightBMIMin = (bmi - 29.9).toFixed(1);
    let overweightBMIMax = (bmi - 25).toFixed(1);
    let loseOverweightSuggestionMin = Number((overweightBMIMin * (height ** 2)).toFixed(1));
    let loseOverweightSuggestionMax = Number((overweightBMIMax * (height ** 2)).toFixed(1));
    let overweightSuggestionMin = weight - loseOverweightSuggestionMin;
    let overweightSuggestionMax = weight - loseOverweightSuggestionMax;

    console.log(`Obesity! 👉 Option 1 - Light Healthy: you should lose in range ${loseOverweightSuggestionMin} ~ ${loseOverweightSuggestionMax} (kg).
        Weight suggestion: ${overweightSuggestionMax} ~  ${overweightSuggestionMin} (kg)`);

    let normalBMIMin = (bmi - 24.9).toFixed(1);
    let normalBMIMax = (bmi - 18.5).toFixed(1);
    let loseWeightSuggestionMin = Number((normalBMIMin * (height ** 2)).toFixed(1));
    let loseWeightSuggestionMax = Number((normalBMIMax * (height ** 2)).toFixed(1));
    let weightSuggestionMin = weight - loseWeightSuggestionMin;
    let weightSuggestionMax = weight - loseWeightSuggestionMax;

    console.log(`Obesity! 💥 Option 2 - Fit Body: You should lose in range ${loseWeightSuggestionMin} ~ ${loseWeightSuggestionMax} (kg).
        Healthy weight suggestion: ${weightSuggestionMax} ~ ${weightSuggestionMin} (kg)`);
}