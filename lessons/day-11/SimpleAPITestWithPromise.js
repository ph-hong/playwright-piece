const todo1EndPoint = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(todo1EndPoint)
    .then(getResponse)
    .then(validateResponse);

// Details implementation
function getResponse(rawResponse) {
    return rawResponse.json();
}

function validateResponse(todo) {
    if (todo.completed) {
        console.log('Task completed!');

    } else {
        console.log('Task is in progress')
    }
}