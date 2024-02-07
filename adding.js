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

// Create a function formatData that receives an array of products from a database.
// Unfortunately, the data is corrupt, some of the objects in the array have a price field of type number but others are strings.
// Some of the products have an inStock field of type boolean, others are the string 'yes' or 'no' and others don't have the field at all.
// The functions should:

// convert all products prices to numbers
// convert all products inStock property to booleans ('yes' -> true, 'no' -> false) and add a default true if the property doesn't exist
// then return the updated and properly formatted array

/*let a = [{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':'50','inStock':'yes'}]
let b = [{'name':'jacket','price':'90.5','inStock':'no'}]
let c = [{'name':'keyboard','price':22.35}]

function formatData(array){
    for(let arr of array){
        if(arr.inStock === 'yes'){
            arr.inStock = true
        } else if(arr.inStock === 'no'){
            arr.inStock = false
        } else {
            arr.inStock = true
        }
        if(typeof arr.price !== 'number'){
            arr.price = Number(arr.price)
        }
    }
    return array
}

console.table(formatData(a));
console.table(formatData(b));
console.table(formatData(c));*/

