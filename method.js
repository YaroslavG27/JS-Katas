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

/*let greeter = {
    sayHello: function(name){
        if(typeof name !== 'string'){
            return 'Hello guest'
        }
        return 'Helo ' + name
    }
}

console.log(greeter.sayHello('John')) // 'Hello John'
console.log(greeter.sayHello('Alice')) // 'Hello Alice'
console.log(greeter.sayHello())  // 'Hello guest'*/

// Create an object counter with 2 methods: increase and decrease.
// Each method takes an object, as per the below tests, and returns the object with internal count value either increased by 1 or decreased by 1.

let counter = {
    increase: function(object){
        return object.count + 1
    },
    decrease: function(object){
        return object.count - 1
    }
}

console.log(counter.increase({ count: 1 }))
console.log(counter.increase({ count: 10 }))
console.log(counter.decrease({ count: 1 }))
console.log(counter.decrease({ count: 10 }))
 
 
