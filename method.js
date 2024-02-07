// Create an object greeter and add a method sayHello to it.
// The method should return 'Hello World'

/*let greeter = {
    sayHello: function (){
        return 'Hello World'
    }
}

console.log(greeter.sayHello()) // 'Hello World'*/

// Create an object greeter.
// In the object, create a method sayHello that takes a parameter, then returns a string as per the tests below.

let greeter = {
    sayHello: function(name){
        if(typeof name !== 'string'){
            return 'Hello guest'
        }
        return 'Helo ' + name
    }
}

console.log(greeter.sayHello('John')) // 'Hello John'
console.log(greeter.sayHello('Alice')) // 'Hello Alice'
console.log(greeter.sayHello())  // 'Hello guest'
 
 
