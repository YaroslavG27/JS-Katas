// Create a function returnLength that takes an array as its only parameter, then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array.

/*function returnLength(array){
    if(array.length === 0){
        return 'the array is empty'
    } else {
        return array.length
    }
}

console.log(returnLength([1,2,3,4]))
console.log(returnLength(['a']))
console.log(returnLength([]))*/

// Create a function addSportsLengths that takes an array of objects.
// Each object contains an array of sports.
// The function should add a property sportsLength to each object, with the length of its sports array.

function addSportsLengths(objects){
    for (let object of objects){
       console.log(object.sportsLength = object.sports.length)
    }
    return objects
}

console.table(addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}]))
console.table(addSportsLengths([{'name':'Bob','sports':[]}]))