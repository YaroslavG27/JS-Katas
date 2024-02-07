// Your task is to create a JavaScript function named addAge.
// This function should take two parameters: an object and a number.
// The function should add the provided number to the object as age and return the updated object.

/*let a = {'name':'Alice'} 
let numA = 25
let b = {'name':'Bob','job':'coder'} 
let numB = 51

function addAge(object, n){
    object.age = n
    return object
}

console.log(addAge(a, numA));
console.log(addAge(b, numB));*/

// Your task is to create a JavaScript function named addAges.
// This function should take two parameters: an array of objects and an array of numbers of equal length.
// The function should add the numbers in the second array to the objects as age, following the corresponding index, and return the updated array of objects.

let arrO1 = [{'name':'Alice'},{'name':'Bob'}]
let arrN1 = [21,51]
let arrO2 = [{'name':'Tom'},{'name':'Tim'},{'name':'Tam'}]
let arrN2 = [30,31,32]

function addAges(arrO, arrN){
    
    for (let arr of arrO){
        arr.age = arrN[0]++
    }
    return arrO
}

console.table(addAges(arrO1, arrN1));
console.table(addAges(arrO2, arrN2));