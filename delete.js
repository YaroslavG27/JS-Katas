// A query has been made to a database and a user object was returned, including the password property, which should not be shared for security reasons.
// Create a function removePassword that takes a user in the format of an object, deletes the password from the user, then returns the user with all its fields but not the password.

let a = {'name':'Jack','age':45,'password':'777888'}
let b = {'name':'Peter','age':21,'password':'1212121212'}

function removePassword(object){
    delete object.password
    return object
}

console.log(removePassword(a));
console.log(removePassword(b));