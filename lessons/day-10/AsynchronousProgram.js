console.log('1. Step 1');
setTimeout(callbackFunction, 2 * 1000); // wait 2s, but not wait this line -> so the step 2 will be called first
console.log('3. Step 3');

function callbackFunction() {
    console.log('2. Step 2');
}
