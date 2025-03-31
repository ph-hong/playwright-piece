// JS does not support Over Loading
// class MethodOverLoading {
//     static add(a, b) {
//         return a + b;
//     }

//     static add(a, b, c) {
//         return a + b + c;
//     }

// }

// const result1 = MethodOverLoading.add(1, 2);
// // const result2 = MethodOverLoading.add(1, 2, 3);

// console.log(result1);

class MethodOverLoading {
    // Resolve -> Rest parameters
    static add(factor, ...nums) {
        return nums.map(num => num * factor);
    }
}

const result1 = MethodOverLoading.add(3, 2);
const result2 = MethodOverLoading.add(3, 2, 4);
console.log(result1);
console.log(result2);

MethodOverLoading.add(2, 4, 5, 6, 7)

class ArrayHelper {
    static filterNumber(array, isEven) {
        if (isEven) {
            return array.filter(num => num % 2 === 0);
        } else {
            return array.filter(num => num % 2 !== 0)
        }
    }
}

let targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isEven = true;
const evenNumbers = ArrayHelper.filterNumber(targetArray, isEven);
const oddNumbers = ArrayHelper.filterNumber(targetArray);

console.log(evenNumbers);
console.log(oddNumbers);