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

/*const splitStringIntoArray = (strng,delimiter) => strng.split(delimiter)

console.log(splitStringIntoArray('apple,banana,cherry',','))
console.log(splitStringIntoArray('Hello World',' '))
console.log(splitStringIntoArray('one-two-three','-'))*/

// Create a function search that takes two parameters: an array of strings, and a string keyword.
// The function should return the string from the array that contains the keyword.
// Assume that there is only 1 string containing the keyword.

/*function search(array, keyword){
    let word = ''
    // for (let i = 0; i < array.length; i++){
    //    array[i].includes(keyword)
    //    word = array[i]
    // }
    // return word
    for (let arr of array){
        if(arr.includes(keyword)){
            word = arr
        }
        return word
    }
}

console.log(search(['hello world','good morning'],'world'))
console.log(search(['123456','911'],'9'))*/

// Create a function flipString that takes a string and returns the string flipped.

/*const flipString = (strng) => strng.split('').reverse().join('')

console.log(flipString('Hello'))
console.log(flipString(''))
console.log(flipString('Haiku Academy'))*/

// A list of phone numbers was entered in the database as plain numbers, without proper formatting.
// Create a function formatPhoneNumber that takes a 12 digit number and formats it according to the tests.
// Assume the phone numbers never start with a zero.
// If the number is not a number, if it's falsy or if it's not 12 digits, return the error message.

function formatPhoneNumber(num){
    return String(num).split('')
}

console.log(formatPhoneNumber(123456789012))
console.log(formatPhoneNumber(123))
console.log(formatPhoneNumber(999999999999))
console.log(formatPhoneNumber(783543777241))
console.log(formatPhoneNumber(null))