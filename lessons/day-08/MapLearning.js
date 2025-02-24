// CREATE
const emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others'],
    ['116', '...'],
])

// READ
console.log(emergencyList.get('116'));

// Check if key is existing
const isNumberExisting = emergencyList.has('117')
console.log(`isNumberExisting: ${isNumberExisting}`);

// Loop over all keys then get the values out
for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`)
}

// Loop over values without using keys
for (const value of emergencyList.values()) {
    console.log(`Value: ${value}`);
}

// UPDATE / ADD
// emergencyList.set('116', 'Something else');
console.log(emergencyList);

// DELETE
console.log(`Size before: ${emergencyList}`);
emergencyList.delete('116')

