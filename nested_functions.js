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

function calcAreaRectangle(a, b){
    return (a * b) + 'rectangle'
}

function calcAreaTriangle(a, b){
    return (a * b / 2) + 'triangle'
}

function calcArea(c, d, form){
    if ()
}