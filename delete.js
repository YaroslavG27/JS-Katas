// A query has been made to a database and a user object was returned, including the password property, which should not be shared for security reasons.
// Create a function removePassword that takes a user in the format of an object, deletes the password from the user, then returns the user with all its fields but not the password.

/*let a = {'name':'Jack','age':45,'password':'777888'}
let b = {'name':'Peter','age':21,'password':'1212121212'}

function removePassword(object){
    delete object.password
    return object
}

console.log(removePassword(a));
console.log(removePassword(b));*/

// A query has been made to a database and an array of users was returned, including the password property for each user object.
// Some of the passwords are encrypted (the user has an encrypted: true property), while others are not.
// Create a function removePasswords that takes a list of users in the format of an array of objects, deletes the password field only from users whose password is NOT encrypted, as well as the encrypted property, then returns the updated users array.

let a = [{'name':'Jack','age':45,'password':'123456'},{'name':'Bob','age':27,'password':'9!4%2!@','encrypted':true}]
let b = [{'name':'Alice','password':'Alice'}]

function removePasswords(array){
    for (let arr of array){
        if(arr.encrypted !== true){
            delete arr.password
        }
        if(arr.encrypted === true){
            delete arr.encrypted
        }
    }
    return array
}

console.table(removePasswords(a))
console.table(removePasswords(b))
