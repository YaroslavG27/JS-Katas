// You are provided with a function that takes an array of numbers and calculates the sum of all the numbers.
// Currently, the function uses a for loop to accomplish this.
// Your task is to refactor this function to use the reduce() method instead, to make the code more concise and functional.

function sumNumbers(numbers) {
    let sum = 0
    return numbers.reduce((number, sum) => sum + number)
}
    // let sum = 0
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }
    // return sum

console.log(sumNumbers([1,2,3,4,5]))
console.log(sumNumbers([10,10]))
console.log(sumNumbers([-5,-3,8]))