// Your task is to create a JavaScript function named addAge.
// This function should take two parameters: an object and a number.
// The function should add the provided number to the object as age and return the updated object.

let a = {'name':'Alice'} 
let numA = 25
let b = {'name':'Bob','job':'coder'} 
let numB = 51

function addAge(object, n){
    object.age = n
    return object
}

console.log(addAge(a, numA));
console.log(addAge(b, numB));