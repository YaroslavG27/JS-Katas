// Your task is to write a JavaScript function named sumNumbers that uses a for loop to sum up all numbers from 1 to a given number n.
// This function, should take one parameter n and return the sum of all numbers from 1 up to (and including) n.

// function sumNumbers(n){
//     total = 0
//     for (let i = 0; i <= n; i = i + 1){
//         total = total + i
//     }
//     return total
// }
// const testLoop = sumNumbers(5)
// console.log(testLoop);

// Your task is to write a JavaScript function that uses a "for" loop to extract the first n elements from an array of numbers and return them in descending order.
// The function, named extractAndSort, will take two parameters: an array of numbers and a numerical value n indicating how many elements to extract.
// Before returning the output array, convert it into a string.

function extractAndSort(arr, n){
    let sort = []; // Array vacío para almacenar los elementos invertidos
    for (let i = n - 1, j = 0; i >= 0; i--, j++) {
        sort[j] = arr[i]; // Asignamos los elementos invertidos a sus índices correspondientes en el array 'sort'
    }
    return String(sort);
}

const sortTest = extractAndSort([5, 15, 20], 2);
console.log(sortTest);