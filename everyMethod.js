// Create a JavaScript function named allPass.
// This function will take two parameters: an array of students scores and a numerical threshold.
// It should check whether all numbers in the array are greater than the given threshold (all students have passed the exam).
// The function should return true if all numbers meet this criterion, or false otherwise.

const allPass = (scores, threshold) => scores.every(score => score > threshold)

console.log(allPass([7,8,8,6,10],5))
console.log(allPass([7,8,8,2],5))
console.log(allPass([10,7,8,10,10,9],5))