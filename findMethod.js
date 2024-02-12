// You are provided with a function that takes an array of objects (representing people) and a name (string).
// The function returns the first person object whose name matches the provided name.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the find() method instead.


const findPerson = (people, name) => people.find(person => person.name === name)

console.log(findPerson([{'name':'Alice','age':25},{'name':'Alice','age':30}],'Alice'))
console.log(findPerson([{'name':'Alice','age':25},{'name':'Bob','age':37}],'Alice'))
console.log(findPerson([{'name':'Bob','age':37},{'name':'Alice','age':25}],'Alice'))