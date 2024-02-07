// Create a JavaScript function called findSmallestNumber.
// This function should take between 2 and 4 numbers as its parameters and return the smallest number.
// Use the correct Math method.

   /* function findSmallestNumber(a, b, c, d){
        if ((!c || c === 0) && (!d || d === 0)){
            return Math.min(a, b)
        } else if (!d || d === 0){
            return Math.min(a, b ,c)
        } else {
            return Math.min(a, b, c, d)
        }
    }


console.log(findSmallestNumber(2,71,5,3.9))
console.log(findSmallestNumber(20,80,-5.5))
console.log(findSmallestNumber(8,1)) */

// Create a function checkSquareRoot that takes an array of objects.
// Each object contains a value and a squareRoot property, where the squareRoot indicates the square root of the value.
// If the square root is correct, add a property correct with a value of true to the object, otherwise false.
// The function should then return the array of objects with their new correct field.


let squares = [{'value':100,'squareRoot':10},{'value':25,'squareRoot':6}]

function checkSquareRoot(squares){
    for(let square of squares){
        if(Math.sqrt(square.value) === square.squareRoot){
            square.correct = true
        } else {
            square.correct = false
        }
    }
    return squares
}

console.table(checkSquareRoot(squares))