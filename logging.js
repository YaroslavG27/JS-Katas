// this will calculate the discount on a product based on their categorie

function calculateDiscount(price, category) {
    let discount
    if (category === 'electronics') {
        discount = price * 0.10
        console.log(discount)
    } else {
        discount = price * 0.05
        console.log(discount)
    }
    return discount
}

const result = calculateDiscount(20, 'shoes')
console.log (result)

// this is a function for multiply values

function multiplyNumbers(a, b) {
    return a * b
}

const multiply = multiplyNumbers(5, 5)
console.log(multiply)