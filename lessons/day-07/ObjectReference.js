let pinky = {
    name: "Pinky",
    age: 20,
    // Nested object
    bankAccount: {
        checking: {
            accountNumber: '111',
        },
        saving: {
            accountNumber: '222',

        }

    }
}

// Shallow copy
// let jimy = { ...pinky };
// jimy.name = "Jimy";
// jimy.bankAccount.accountNumber = '234';

// console.log(pinky);
// console.log(jimy);

// Shallow copy - handle for nested obj as well
// let jimy = JSON.parse(JSON.stringify(pinky));
// jimy.bankAccount.checking.accountNumber = '888';

// console.log(pinky);
// console.log(jimy);

// Get key, value
console.log(Object.keys(pinky));
console.log(Object.values(pinky));
console.log(Object.entries(pinky));
