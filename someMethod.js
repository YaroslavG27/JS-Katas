// Create a function called containsHighValue.
// This function will take an array of numbers and check if the array contains any number greater than a specified value.
// The function should use the some() method to perform this check and return true if such a number exists, or false otherwise.

/*const containsHighValue = (numbers, value) => numbers.some(number => number > value)


console.log(containsHighValue([1,2,3,4,5],4))
console.log(containsHighValue([10,100,1000],55))
console.log(containsHighValue([10,100,1000],2000))
console.log(containsHighValue([1,2,3],10))*/

// Create a JavaScript function named checkAndTransform.
// This function will take two parameters: an array of numbers and a threshold value.
// First, it should check if any number in the array is greater than the threshold.
// If such a number exists, then use the map() method to double each number in the array.
// The function should return the transformed array if there's a number greater than the threshold, or the original array otherwise.

function checkAndTransform (numbers, threshold){
    if(numbers.some(number => number > threshold === true)){
        return numbers.map(number => number * 2)
    } else {
        return numbers
    }
}

console.log(checkAndTransform([1,4,6,8],5))
console.log(checkAndTransform([2,3,4],10))