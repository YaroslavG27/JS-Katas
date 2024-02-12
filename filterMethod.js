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

/*const filterOutNegativeNumbers = numbers => numbers.filter(number => number >= 0)

console.log(filterOutNegativeNumbers([1,2,3]))
console.log(filterOutNegativeNumbers([1,-2,-3,4]))
console.log(filterOutNegativeNumbers([-10,-20,-30,-40]))*/

// You are given a function that is intended to return an array of strings that are longer than 4 characters.
// However, there's a mistake in the implementation of the filter() method.
// Your task is to identify and correct the error in the function.

/*function getLongStrings(strings) {
    return strings.filter(string => string.length > 4)
}

console.log(getLongStrings(['Hello','Hola','Ciao']))
console.log(getLongStrings(['Grazie','Merci','Tak']))
console.log(getLongStrings(['Grazie','Merci','Tak','Kop Khun']))*/

// Create a JavaScript function named filterAndSquareEvens. This function should take an array of numbers as its input. It should first filter out all odd numbers, and then square each of the remaining even numbers. The function should return a new array with these squared even numbers.

const filterAndSquareEvens = numbers => numbers.filter(number => number % 2 === 0).map(number => number * number)


console.log(filterAndSquareEvens([1,2,3,4,5,6]))
console.log(filterAndSquareEvens([10,-10,20,-20]))
console.log(filterAndSquareEvens([0,11,22,0]))