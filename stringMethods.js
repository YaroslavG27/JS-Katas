// Create a returnLength function that takes a parameter and returns its length if it's a string. In any other case it returns the type of the parameter.

/*function returnLength(parameter){
    if(typeof parameter !== 'string'){
        return typeof parameter
    } else {
        return parameter.length
    }
}

console.log(returnLength('hello'))
console.log(returnLength(''))
console.log(returnLength(10))
console.log(returnLength([1,2,3]))
console.log(returnLength(true))*/

// Create a JavaScript function called isLongerThan.
// This function should take two parameters: a string and a number.
// It should return true if the length of the string is greater than the given number, and false otherwise.
/*
const isLongerThan = (strng, num) => strng.length > num ? true : false

console.log(isLongerThan('hello',3))
console.log(isLongerThan('hello',5))
console.log(isLongerThan('',1))
console.log(isLongerThan('',0))*/

// Create a JavaScript function named splitStringIntoArray.
// This function should take two parameters: a string and a delimiter. It should divide the string into an array of substrings, separated by the specified delimiter, and return the resulting array.