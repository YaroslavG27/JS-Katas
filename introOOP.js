// Create a house object with the properties:

// house = {
//     rooms: 2,
//     windows: 2,
//     bathroom: 1,
//     material: 'stone'
// }

// Create a villa object with the properties:

// windows = 6
// material = 'stone'
// and a property livingroom with the following sub-properties:

// windows = 2
// doors = 1

// let villa = {
//     windows: 6,
//     material: 'stone',
//     livingRoom: {
//         windows: 2,
//         doors: 1
//     }
// }
// console.log(villa)

// The following object is incorrect, fix it:

// let team = {
//     name: 'Spartans',
//     speed: 90
// }
// console.log(team);

// Create a function countWindows that counts, then returns, the total number of windows in the house parameter object, by accessing each room's windows:

// let house = {
//     livingRoom: {
//       windows: 4
//     },
//     bedroom: {
//       windows: 2
//     },
//     kitchen: {
//       windows: 1
//     }
//   }

//   function countWindows(house){
//     return house.livingRoom.windows + house.bedroom.windows + house.kitchen.windows
//   }

//   console.log(countWindows(house));

// Your task is to create a function named getNestedProperty.
// This function should take an object as its parameter.
// The object will have a nested structure, with an object inside the main object.
// You need to access the email property inside the nested object and return its value.

// let users = { //This is the object
//    contact: { //This is the object nested in the main object
//         email: 'alice@example.com'
//    }
// }

// function getNestedProperty(users){ //This is the function that take an object as a parameter
//     return users.contact.email //This is the way to access the main object and navigate trough it and return it
// }

// console.log(getNestedProperty(users));
// //    [{email: 'alice@example.com' }, {email: 'bob@example.com'}]

// Create a function named calculateTotalPrice.
// This function should take an array of objects as its parameter.
// Each object in the array represents an item, and each item has a price property.
// The function should calculate the total price of all items in the array by summing up their individual prices and return the total sum.

// let a = [{name: "Bag", price: 90}, {name: "Shoes", price: 100}]
// calculateTotalPrice(a) // 190
// let b = [{name: "Car", price: 1000}, {name: "Apple", price: 5}, {name: "Laptop", price: 500}]
// calculateTotalPrice(b) // 1505

// function calculateTotalPrice(objects){ //This function will take an array of objects as a parameter 
//     let sum = 0
//     for(let object of objects){
//         if(typeof object.price === 'number'){
//             sum = sum + object.price
//         }
//     }
//     return sum
// }
// console.log(calculateTotalPrice([{"name": "Bag", "price": 90}, {"name": "Shoes", "price": 100}]))

// Your task is to create a function named sumPositiveNumbers.
// This function should take an object as its parameter.
// Within this object, there are two properties array1 and array2, each containing an array of numbers.
// The function should calculate the sum of all positive numbers from both arrays combined and return the total sum.

// function sumPositiveNumbers(object){
//     let totalSum = 0
//     for (let number of object.array1){
//         if(number > 0){
//             totalSum = totalSum + number
//         } 
//     } for (let number of object.array2){
//         if(number > 0){
//             totalSum = totalSum + number
//         }
//     }
//     return totalSum
// }   

// console.log(sumPositiveNumbers({
//     "array1": [1, -3, 5, 7],
//     "array2": [10, -2, 4, -5]
// }))

// Your task is to create a function named getEvenScorePlayers.
// This function should take an array of objects as its parameter.
// Each object represents a player with two properties: name (a string) and score (a number or a string).
// The function should select the players whose scores are even numbers (and specifically not strings), concatenate their names into a single string with spaces, and return this string.

function getEvenScorePlayers(objects){
    let singleString = ''
    for(let object of objects){
        if (typeof object.score === 'number' && object.score % 2 === 0){
            singleString += object.name + ' '
        }
    } return singleString
}

console.log(getEvenScorePlayers([{"name": "Alice", "score": 20}, {"name": "Bob", "score": 15}, {"name": "Charlie", "score": 30}, {"name": "Daisy", "score": "40"}]));