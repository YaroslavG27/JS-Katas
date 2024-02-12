// You are given a function that takes an array of numbers and returns a new array containing only even numbers.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the filter() method instead.

// function getEvenNumbers(numbers) {
//     const evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }

/*const getEvenNumbers = numbers => numbers.filter(number => number % 2 === 0)

console.log(getEvenNumbers([1,2,3,4,5,6]))
console.log(getEvenNumbers([0,-10,11,-12,13]))
console.log(getEvenNumbers([]))*/

// Write a JavaScript function named filterOutNegativeNumbers.
// This function should take an array of numbers and return a new array with all negative numbers filtered out, leaving only positive numbers and zeros.

const filterOutNegativeNumbers = numbers => numbers.filter(number => number >= 0)

console.log(filterOutNegativeNumbers([1,2,3]))
console.log(filterOutNegativeNumbers([1,-2,-3,4]))
console.log(filterOutNegativeNumbers([-10,-20,-30,-40]))