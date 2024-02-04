// function checkCredentials(username, password) {
//     if (username === 'admin' && password === '12345') {
//             return 'granted'
//         } else {
//             return 'denied'
//         }
// }

// const test = checkCredentials('admin', '12645')
// console.log(test)

// function checkRole(role) {
//     if (role === 'admin' || role === 'editor') {
//         return 'granted'
//     }
//     return 'denied'
// }
// const test2 = checkRole('user')
// console.log(test2)

// Create a function checkVehicle that takes a parameter vehicle (a string).
// The function should prevent 'car', 'truck' and 'motorbike' from accessing the park, returning 'not allowed', and should allow anyone else, such as 'pedestrian' or 'bicycle' in, returning 'allowed'.
// Use the NOT EQUAL operator.

// function checkVehicle(vehicle) {
//     if(vehicle === 'car' || vehicle === 'truck' || vehicle === 'motorbike'){
//     return 'not allowed'
//     }
//     return 'allowed'
// }

// const test3 = checkVehicle('pedestrian')
// console.log(test3)

// Create a function canAccess that takes 2 parameters: role (a string) and isActive (a boolean).
// The function should return 'true' if the user's role is either 'admin' or 'editor' and their account is active.
// For all other scenarios, the function should return 'false'.

// function canAccess(role, isActive){
//     if (isActive === true && (role === 'admin' || role === 'editor')){
//         return 'true'
//     }
//     return 'false'
// }

// const test4 = canAccess('user', false)
// console.log(test4)

// Vowels are "a", "e", "i", "o" and "u".
// Create a function countVowels that takes an array of letters, and returns the number of vowels in the array.

function countVowels(letters){
    return letters.lenght
}

const numberOfLetters = countVowels([a,b,c,d,e])
console.log(numberOfLetters)