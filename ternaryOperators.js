// In the following function, convert the if condition into a ternary operator.

/*function numerToBoolean(n) {
   return n > 0 ? true : false
}

console.log(numerToBoolean(5))
console.log(numerToBoolean(-30))*/

// Create a function halfOrDouble that takes an array of numbers.
// The function should then check the value of each number and, if it's less than 10, it should double it, otherwise it should halve it.
// The function should then return the updated array.
// Use a ternary operator.


function halfOrDouble(numbers){
    for(let i = 0; i < numbers.length ; i++){
        numbers[i] < 10 ? numbers[i] *= 2 : numbers[i] /= 2
    }
    return numbers
}

console.log(halfOrDouble([10,5,2,14]))
console.log(halfOrDouble([-20,1,70,2,9,0,16]))
console.log(halfOrDouble([]))
