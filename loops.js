// Your task is to write a JavaScript function named sumNumbers that uses a for loop to sum up all numbers from 1 to a given number n.
// This function, should take one parameter n and return the sum of all numbers from 1 up to (and including) n.

function sumNumbers(n){
    total = 0
    for (let i = n; n >= 0; i = i + 1){
        total = total + i
        return total
    }
}
const testLoop = sumNumbers(5)
console.log(testLoop);