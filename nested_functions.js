// Your task is to create two functions.
// The first function, calculateSquare, should take a number as a parameter and return its square.
// The second function, sumOfSquares, should take two numbers, invoke calculateSquare for each number, and then return the sum of their squares.

// Automatic tests are not available for this kata, please use the tests below in NodeJs.

function calculateSquare(n){
    return n * n
}

function sumOfSquares(a, b){
    return calculateSquare(a) + calculateSquare(b)
}

const sumOfSquaresTest = sumOfSquares(4, 10)
console.log(sumOfSquaresTest);