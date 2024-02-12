// Create a JavaScript function named allPass.
// This function will take two parameters: an array of students scores and a numerical threshold.
// It should check whether all numbers in the array are greater than the given threshold (all students have passed the exam).
// The function should return true if all numbers meet this criterion, or false otherwise.

/*const allPass = (scores, threshold) => scores.every(score => score > threshold)

console.log(allPass([7,8,8,6,10],5))
console.log(allPass([7,8,8,2],5))
console.log(allPass([10,7,8,10,10,9],5))*/

// Create a JavaScript function called searchHouses.
// This function should take 3 parameters: an array of houses (objects, each having an id, a price and a location), a number (price) and a string (location).
// It should return true of all the houses contain the location string in the name of their location and if they all below the price; otherwise return false.

const searchHouses = (houses, price, location) => houses.every(house => house.price < price && house.location.includes(location))

console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Koh'))
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Bali'))
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],90,'Koh'))
console.log(searchHouses([{'price':100,'location':'Bali'},{'price':80,'location':'Koh Samui'}],90,'Bali'))