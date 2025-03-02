console.log('1. Chay toi nha Teo');

waitForResponse().then(goToTheCoffeeShop);

function goToTheCoffeeShop() {
    console.log('3. Chay toi quan ca phe');
}

// Wrap an asynchronous function to a promise
function waitForResponse() {
    return new Promise(wrapper);
}

function wrapper(resolve, reject) {
    setTimeout(function () {
        console.log('2. Teo oi, uong ca phe ko?');
        resolve();
    }, 1 * 3000);
}