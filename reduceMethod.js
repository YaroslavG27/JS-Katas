// You are provided with a function that takes an array of numbers and calculates the sum of all the numbers.
// Currently, the function uses a for loop to accomplish this.
// Your task is to refactor this function to use the reduce() method instead, to make the code more concise and functional.

/*function sumNumbers(numbers) {
    let sum = 0
    return numbers.reduce((sum, number) => sum + number)
}

console.log(sumNumbers([1,2,3,4,5]))
console.log(sumNumbers([10,10]))
console.log(sumNumbers([-5,-3,8]))*/

// Create a JavaScript function named sumOfEvenNumbers.
// This function will take an array of numbers as its input.
// It should first use the filter() method to keep only the even numbers from the array.
// Then, use the reduce() method to calculate and return the sum of these even numbers.

const sumOfEvenNumbers = numbers => numbers.filter(number => number % 2 === 0).reduce((number,sum) => sum + number)

console.log(sumOfEvenNumbers([1,2,3,4,5,6]))
console.log(sumOfEvenNumbers([20,1,20,1]))