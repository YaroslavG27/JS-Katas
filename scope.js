// function displayMessage(x) {
//     let message = 'Hello'
//     if (x) {
//         message = 'Hello, this is a scope problem!'
//     }
//     return message

// }

// const scopeProblem = displayMessage(1)
// console.log(scopeProblem)

// Declara una variable global llamada userName y asígnale tu nombre. Luego, crea una función llamada greetUser que imprima un saludo personalizado utilizando la variable userName.

// let userName = 'Yaroslav'

// function greetUser(message){
//     return message + userName
// }

// console.log(greetUser('Hello '));

// Define una variable global llamada currentYear y asígnale el año actual. Luego, crea una función llamada displayYear que imprima el año actual utilizando la variable global currentYear.

// let currentYear = 2024

// function displayYear(message){
//     return message + currentYear
// }

// console.log(displayYear('Current year is '));

// Escribe una función llamada calculateArea que tome dos parámetros, base y altura, y calcule el área de un rectángulo. Dentro de la función, declara una variable local llamada area y asigna el resultado del cálculo de área. Finalmente, la función debe imprimir el valor de area.

// function calcArea(base, height){
//     let area = base * height
//     return area
// }

// console.log(calcArea(12, 30));

// Define una función llamada updateCounter que inicialice una variable local counter con el valor 0. Luego, dentro de la función, incrementa counter en 1 y luego imprime su valor. Llama a la función dos veces para observar cómo cambia el valor de counter en cada llamada.

function updateCounter() {
    let counter = 0; // Declaramos la variable counter dentro de la función para mantenerla en un alcance local

    return function(n) { // Devolvemos una función interna que recibe un parámetro
        counter = counter + n; // Añadimos n al contador actual
        return counter;
    };
}

let counterFunction = updateCounter(); // Creamos una instancia de la función interna

console.log(counterFunction(1)); // 1
console.log(counterFunction(2)); // 3 (1 + 2)
console.log(counterFunction(3)); // 6 (3 + 3)