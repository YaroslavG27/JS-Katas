// You are given a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// The current implementation sorts the array using a for loop.
// Your task is to refactor this function to use the sort() method instead, for a more efficient and idiomatic approach.

const sortNumbers = numbers => numbers.sort((number, order) => number - order)


console.log(sortNumbers([6,5,4,1,2,3]))
console.log(sortNumbers([20,100,-20,0]))