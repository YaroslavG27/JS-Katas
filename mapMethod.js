// You are provided with a function that takes an array of numbers and returns a new array with each number doubled.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the map() method instead.

// function doubleNumbers(arr) {
//     const doubled = [];
//     for (let i = 0; i < arr.length; i++) {
//         doubled.push(arr[i] * 2);
//     }
//     return doubled;
// }


/*function doubleNumbers(numbers){
   return numbers.map( num =>  num * 2)
}
    

console.log(doubleNumbers([1,2,3,4]))
console.log(doubleNumbers([10,10,10]))
console.log(doubleNumbers([0,100]))
console.log(doubleNumbers([]))*/

// Create a JavaScript function named convertToFahrenheit.
// This function will take an array of temperatures in Celsius and return a new array with these temperatures converted to Fahrenheit.
// The conversion formula to use is Fahrenheit = Celsius * 9 / 5 + 32.
// Use the map method.

const convertToFahrenheit = celsius => celsius.map(cel => cel * 9 / 5 + 32)

console.log(convertToFahrenheit([15,40,12,5]))
console.log(convertToFahrenheit([42,0,-10]))