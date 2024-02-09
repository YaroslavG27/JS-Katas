// Create a function returnLength that takes an array as its only parameter, then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array.

function returnLength(array){
    if(array.length === 0){
        return 'the array is empty'
    } else {
        return array.length
    }
}

console.log(returnLength([1,2,3,4]))
console.log(returnLength(['a']))
console.log(returnLength([]))