let user = {
    name: "Pinky",
    age: 18,
    "my gender": "F",
    weight: 54,
}

// READ
console.log(user.name);

// UPDATE
user.name = "Pinky Update";
console.log(user.name)

// Destructure
const { name, age, ["my name"]: gender } = user;
sayHello(user);

// Function with destructured params
function sayHello({ name }) {
    console.log(`Hello there, my name is ${name}`);
}

// Delete
delete user.weight;
console.log(user);