const readline = require(`readline-sync`);

let arriavalTime = readline.question('Arriavl time: ');
let isHeOnTime = (arriavalTime == 7);

// Comparision

if (isHeOnTime) {
    console.log("Talk together");
}
else {
    console.log("Left a letter");
}

if (!isHeOnTime) {
    console.log("Left a letter");
}
else {
    console.log("Talk together");
}

// Ternary Operator
let msg = isHeOnTime ? "Talk together" : "Left a letter";
console.log(msg);