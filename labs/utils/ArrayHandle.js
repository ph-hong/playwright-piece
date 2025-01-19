function isEvenNumber(number) {
    return number % 2 === 0
};

function swap(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

module.exports = {
    isEvenNumber,
    swap,
};