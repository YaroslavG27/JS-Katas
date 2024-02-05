// Your task is to create two functions.
// The first function, calculateSquare, should take a number as a parameter and return its square.
// The second function, sumOfSquares, should take two numbers, invoke calculateSquare for each number, and then return the sum of their squares.

// Automatic tests are not available for this kata, please use the tests below in NodeJs.

// function calculateSquare(n){
//     return n * n
// }

// function sumOfSquares(a, b){
//     return calculateSquare(a) + calculateSquare(b)
// }

// const sumOfSquaresTest = sumOfSquares(4, 10)
// console.log(sumOfSquaresTest);

// Your task is to create three functions in JavaScript to calculate the area of rectangles and triangles.
// The first two functions calcAreaRectangle and calcAreaTriangle will calculate the areas of a rectangle and a triangle, respectively.
// The formula for a rectangle is a * b, while for a triangle it's a * b / 2.
// The third function calcArea, takes 2 numbers and a string 'rectangle' or 'triangle' and decides which calculation to perform based on the given string.
// If a different string, or no string, is passed, return null.

// Automatic tests are not available for this kata. Please use the tests below in NodeJS.

// function calcAreaRectangle(base, height) {
//     return base * height;
// }

// function calcAreaTriangle(base, height) {
//     return (base * height) / 2;
// }

// function calcArea(base, height, figure) {
//     if (figure === 'rectangle') {
//         return calcAreaRectangle(base, height);
//     } else if (figure === 'triangle') {
//         return calcAreaTriangle(base, height);
//     } else {
//         return null;
//     }
// }

// console.log(calcArea(100, 5, 'rectangle')); // 500
// console.log(calcArea(100, 50, "triangle")); // 2500
// console.log(calcArea(10, 10, "rectangle")); // 100
// console.log(calcArea(10, 10, "triangle")); // 50
// console.log(calcArea(30, 20)); // null
// console.log(calcArea(30, 20, "cube")); // null


// Your task is to create a JavaScript function sumEvenNumbers that processes an array of numbers.
// For each number in the array, the function should call an external function isEven to check if the number is even.
// Then, it should sum all the even numbers and return the total sum.

// Automatic tests are not available for this kata, please use the tests below in NodeJs.

function isEven(num){
    return num % 2 === 0
}

function sumEvenNumbers(numbers){
    let sum = 0
    for(let num of numbers){
        if(isEven(num)){
            sum = sum + num
        }
    }
    return sum
}

console.log(sumEvenNumbers([1, 20, 5, 4])); // 24
console.log(sumEvenNumbers([0, 100, -20, 5.5, -10])); // 70
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12