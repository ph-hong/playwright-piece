let myString = `  Day la chu trong 'nhay don'`;
console.log(myString);

// length
console.log(myString.length);

// chartArt
console.log(myString.charAt(0));

//Print each character
for (let index = 0; index < myString.length; index++) {
    console.log(myString.charAt(index))
}

// eliminate spaces
let trimStr = myString.trim();
console.log(trimStr);

// hint: Em phai hi sinh -> remove m
let targetStr = "tMoi mnay gmap mnmhau 7MH";

// REGEX
let decodedStr = targetStr.replace(/m/gi, "");
console.log(decodedStr);

let uiStr = "200mis";
let uiStrWithNum = uiStr.replace(/[^0-9]/g, "");
console.log(uiStrWithNum);
console.log(Number(uiStrWithNum) + 1);

// +, concat() - concatenating
let firstString = "Hello";
let secondString = ", tui ten AA";
let combinedString = firstString.concat(secondString).concat("!") + "!";
console.log(combinedString);