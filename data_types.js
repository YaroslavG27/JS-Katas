// Your goal is to write a JavaScript function named addDiscount that takes two parameters: price and discount.
// The function should check if both parameters are numbers. If they are, it should apply the discount to the price and return the new discounted price.
// For example, $100 discounted 25% (0.25) is $75.
// If either parameter is not a number, the function should return the error message: "Error: Invalid input"

// function addDiscount(price, discount){
//     let total = 0
//     if (typeof(price) === 'number' && typeof(discount) === 'number'){
//         return total = price - (price * discount)
//     } else {
//         return 'Error: Invalid input'
//     }
// }

// const discountTest = addDiscount('hello', 'hello')
// console.log(discountTest);

// Create a JavaScript function named formatDisplayName that takes two parameters: a user's first name and last name.
// If the last name is not provided, the function should return the error message: "Last name missing".
// The function should check if both parameters are strings and then return a formatted full name with a space in between.
// If either parameter is not a string, the function should return the error message: "Error, not a string".

// function formatDisplayName(firstName, lastName){
//     if (typeof(firstName) === 'string' && typeof(lastName) === 'string'){
//         return firstName + ' ' + lastName
//     } else if (!lastName){
//         return 'Last name missing'
//     } else {
//         return 'Error, not a string'
//     }
// }

// const displayNameTest = formatDisplayName(100, true)
// console.log(displayNameTest);