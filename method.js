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

/*let counter = {
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
console.log(counter.decrease({ count: 10 }))*/

// In this kata, you're going to create a mini JS library that is useful to calculate a number of values related to nutrition.

// Create an object named nutrition
// Within the object, create the following methods. For each method you have the formula that should be used to calculate the result.

// calculateCaloriesFromMacros(protein, carbs, fat)
// Total Calories = (Protein * 4) + (Carbs * 4) + (Fat * 9)

// calculateBMI(weight, height)
// BMI = weight / (height squared) * 10000

// calculateBMR(weight, height, age, gender)
// For 'male', BMR = 10 * weight + 6.25 * height - 5 * age + 5
// For 'femal', BMR = 10 * weight + 6.25 * height - 5 * age - 161

// calculateWaterIntake(weight)
// Water Intake = weight * 0.033

let nutrition = {
    calculateCaloriesFromMacros: function(protein, carbs, fat){
        let totalCalories = (protein * 4) + (carbs * 4) + (fat * 9)
        return totalCalories
    },
    calculateBMI: function(weight, height){
        return weight / (height * height) * 10000
    },
    calculateBMR: function(weight, height, age, gender){
        let bmr = 0
        if(gender === 'male'){
            bmr = 10 * weight + 6.25 * height - 5 * age + 5
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161
        }
        return bmr
    },
    calculateWaterIntake: function(weight){
        return weight * 0.033
    }
}

console.log(nutrition.calculateCaloriesFromMacros(150, 100, 50))
console.log(nutrition.calculateCaloriesFromMacros(100, 120, 30))
console.log(nutrition.calculateBMI(80, 180))
console.log(nutrition.calculateBMI(65, 155))
console.log(nutrition.calculateBMR(80, 180, 35, 'male'))
console.log(nutrition.calculateBMR(60, 170, 26, 'female'))
console.log(nutrition.calculateWaterIntake(80))
console.log(nutrition.calculateWaterIntake(55))
 
