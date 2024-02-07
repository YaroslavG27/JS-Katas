// Create a JavaScript function called findSmallestNumber.
// This function should take between 2 and 4 numbers as its parameters and return the smallest number.
// Use the correct Math method.

function findSmallestNumber(a, b, c, d){
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
console.log(findSmallestNumber(8,1))