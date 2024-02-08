// Convert the following String Concatenation into a Template Literal.

/*function greet(age, city) {
    return `Hello, I'm ${age} years old and I'm from ${city}!`
}

console.log(greet(20,'Tokyo'))
console.log(greet(37,'Bangkok'))*/

//Create an arrow function greetTime that takes a parameter time (a number).
// Inside the function, create a second arrow function checkTime that takes a parameter t (a number).
// Within the checkTime function, use a ternary operator to check if t is less than 12, if it is, return 'morning', otherwise return 'evening'.
// Within the greetTime function, return a template literal that includes the invokation of the function checkTime, passing time as a parameter, to then return either of the following strings:

const timeGreet = (time) => {
    const checkTime = t => t < 12 ? morning = 'Good morning' : evening = 'Good evening'
    return `${checkTime(time)}`
}

console.log(timeGreet(10))
console.log(timeGreet(11))
console.log(timeGreet(12))
console.log(timeGreet(14))