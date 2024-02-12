// Create a function called containsHighValue.
// This function will take an array of numbers and check if the array contains any number greater than a specified value.
// The function should use the some() method to perform this check and return true if such a number exists, or false otherwise.

const containsHighValue = (numbers, value) => numbers.some(number => number > value)


console.log(containsHighValue([1,2,3,4,5],4))
console.log(containsHighValue([10,100,1000],55))
console.log(containsHighValue([10,100,1000],2000))
console.log(containsHighValue([1,2,3],10))