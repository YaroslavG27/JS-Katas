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