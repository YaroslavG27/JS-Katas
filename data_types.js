// Your goal is to write a JavaScript function named addDiscount that takes two parameters: price and discount.
// The function should check if both parameters are numbers. If they are, it should apply the discount to the price and return the new discounted price.
// For example, $100 discounted 25% (0.25) is $75.
// If either parameter is not a number, the function should return the error message: "Error: Invalid input"

function addDiscount(price, discount){
    let total = 0
    if (typeof(price) === 'number' && typeof(discount) === 'number'){
        return total = price - (price * discount)
    } else {
        return 'Error: Invalid input'
    }
}

const discountTest = addDiscount('hello', 'hello')
console.log(discountTest);

// Create a JavaScript function named formatDisplayName that takes two parameters: a user's first name and last name.
// If the last name is not provided, the function should return the error message: "Last name missing".
// The function should check if both parameters are strings and then return a formatted full name with a space in between.
// If either parameter is not a string, the function should return the error message: "Error, not a string".

function formatDisplayName(firstName, lastName){
    if (typeof(firstName) === 'string' && typeof(lastName) === 'string'){
        return firstName + ' ' + lastName
    } else if (!lastName){
        return 'Last name missing'
    } else {
        return 'Error, not a string'
    }
}

const displayNameTest = formatDisplayName(100, true)
console.log(displayNameTest);

// Sum Numbers in Array
// Create a function sumNumbers that takes an array as a parameter.
// The array can contain a combination of numbers, strings and booleans.
// The function should find all numbers in the array, add them and return the sum.
// If there are no numbers, the function should return 0.

function sumNumbers(arr) {
    let sum = 0;
    for (let element of arr) {
        if (typeof element === 'number') {
            sum = sum + element;
        }
    }

    return sum;
}
console.log(sumNumbers([10, 5]));
console.log(sumNumbers([10, 5, 20, 5]));
console.log(sumNumbers(['hello', -20, 3]));
console.log(sumNumbers(['yes', 'no']));
console.log(sumNumbers([true, 'no', 0.9, 0.1, false, 'yes']));
console.log(sumNumbers([]));

