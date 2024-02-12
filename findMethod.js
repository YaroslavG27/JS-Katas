// You are provided with a function that takes an array of objects (representing people) and a name (string).
// The function returns the first person object whose name matches the provided name.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the find() method instead.


/*const findPerson = (people, name) => people.find(person => person.name === name)

console.log(findPerson([{'name':'Alice','age':25},{'name':'Alice','age':30}],'Alice'))
console.log(findPerson([{'name':'Alice','age':25},{'name':'Bob','age':37}],'Alice'))
console.log(findPerson([{'name':'Bob','age':37},{'name':'Alice','age':25}],'Alice'))*/

// Write a JavaScript function named findProductById.
// This function will take an array of product objects and a specific product ID.
// It should use the find() method to search through the array and return the product object that has the matching ID.
// If no product with the given ID is found, the function should return null.

/*function findProductById(objects, identification){
    return objects.find(object => object.id === identification)
    }

console.log(findProductById([{'id':1,'name':'Smartphone'},{'id':2,'name':'Laptop'},{'id':3,'name':'Tablet'}],2))
console.log(findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],109))
console.log(findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],20))*/

