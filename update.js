// Your task is to create a function called markAsPaid.
// This function should take an object as its only parameter (a bill), update the status property of the bill to paid, and then return the updated object.

/*let a = {"total": "105", "status": "pending"}
// markAsPaid(a) // {"total": "105", "status": "paid"}
let b = {"total": "33.2", "status": "pending"}
// markAsPaid(b) // {"total": "33.2", "status": "paid"}

function markAsPaid(object){
    object.status = 'paid'
    return object
}

console.log(markAsPaid(a))
console.log(markAsPaid(b))*/

// Your task is to create a function called markAsValue.
// This function should take 2 parameters: an object (a bill), and a string (a value).
// The function should update the status property of the bill to value parameter, and then return the updated object.

/*let a = {"total": "99", "status": "pending"}
// markAsValue(a, "accepted") // {"total": "99", "status": "accepted"}
let b = {"total": "71.5", "status": "pending"}
// markAsValue(b, "denied") // {"total": "71.5", "status": "denied"}

function markAsValue(object, state){
    object.status = state
    return object
}

console.log(markAsValue(a, 'accepted'));
console.log(markAsValue(b, 'denied'));*/

// Create a JavaScript function named updateNestedArray.
// This function should take three parameters:

// an object
// a number
// and a string.
// The object contains a nested array of strings. The function should update the element in the array at the index specified by the number parameter to the value provided by the string parameter.
// After updating, the function should return the modified object.

let a = {"fruits": ["apple", "banana"]}
// updateNestedArray(a, 1, "cherry") // {"fruits": ["apple", "cherry"]}
let b = {"fruits": ["pineapple", "strawberry"]}
// updateNestedArray(b, 0, "kiwi") // {"fruits": ["kiwi", "strawberry"]}

function updateNestedArray(object, num, fruit){
    object.fruits[num] = fruit
    return object
}

console.log(updateNestedArray(a, 1, 'banana'));
console.log(updateNestedArray(b, 0, 'kiwi'));