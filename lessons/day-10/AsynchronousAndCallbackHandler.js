/**
 * 1. Send request -> get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */
const url = 'url-url';

//Calback hell
sendRequest(url, function (response) {
    processResponse(response, function (statusCode) {
        validateResponse(statusCode);
    })
});

// Mimic Asynchronous
function sendRequest(url, callbackFn) {
    console.log(`1. Sending request to the endpoint ${url}...`);
    setTimeout(function () {
        callbackFn({ status: 200 })
    }, 2 * 1000);
}

// Mimic Asynchronous
function processResponse(response, callbackFn) {
    console.log(`2. Processing the response...`);
    setTimeout(function () {
        callbackFn(response.status);
    })
}

// Mimic Asynchronous
function validateResponse(responseStatus) {
    console.log(`3. Validating the response...`);
    if (responseStatus === 200) {
        console.log('PASSED!');
    } else {
        console.log('FAILED!');
    }
}