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

/*function addSportsLengths(objects){
    for (let object of objects){
       object.sportsLength = object.sports.length
    }
    return objects
}

console.table(addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}]))
console.table(addSportsLengths([{'name':'Bob','sports':[]}]))*/

// Create a function reverseArray that takes an array and returns the array reversed.

/*function reverseArray(array){
    return array.reverse()
}

console.log(reverseArray([1,2,3,4]))
console.log(reverseArray(['a','b','c']))*/

// Create a function removeEmptySpots that takes an array as a parameter.
// The array may have a falsy value at the beginning or at the end (or both).
// The function should remove these falsy values and return the clean array.

function removeEmptySpots(array){
    if(typeof array[array.length - 1] !== 'number' && typeof array[array.length - 1] !== 'string' ||  array[array.length - 1] === 0){
        array.pop()
    }
    if(typeof array[0] !== 'number' && typeof array[0] !== 'string' || array[0] === 0){
        array.shift()
    }
    return array
}

console.log(removeEmptySpots([0,2,3,4,0]))
console.log(removeEmptySpots([null,'a','b','c']))
console.log(removeEmptySpots([10,11,0,50,false]))
console.log(removeEmptySpots([0,100,'a','b',50,null]))


