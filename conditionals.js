// Create a function checkLottery that takes 2 parameters: ticketNumber and winningTicket.
// Create a variable message within the local scope of the function.
// Using an "if/else" conditional statement, change the value of message to "Winner" if ticketNumber matches the winningTicket, or "Loser" otherwise.
// Return the value of message.

function checkLottery(ticketNumber, winningTicket){
    if(ticketNumber === winningTicket){
        let message = 'Winner'
        return message
    } else {
        let message = 'Loser'
        return message
    }
}

const tryToWin = checkLottery(969, 999)
console.log(tryToWin)

// Improve the following conditional statement, so that it can handle bookings longer than 30 days, in which case log the phrase: "Please contact us for monthly bookings".

bookingDays = 25
let output = ''
if (bookingDays < 30) {
  output = 'Your booking is being processed'
  return output
} else {
    output = 'Please contact us for monthly bookings'
    return output
}

// Create a function categorizeDay that categorizes the day based on temperature and weather conditions.
// Your task is to implement a set of nested if, else if, and else statements to accurately categorize the day.
// Don't use the && or || symbols.

// The function should categorize the day as follows:

// If the temperature is 25 degrees or above and it's sunny, it's a "Beach day".
// If it's sunny but the temperature is below 25 degrees, it's a "Park day".
// If it's rainy and the temperature is below 15 degrees, it's a "Stay home" day.
// If it's rainy but the temperature is 15 degrees or above, it's a "Museum day".
// In all other cases, it's a "Casual day".

function categorizeDay(temperature, weather) {
    if (temperature >= 25) {
        if (weather === 'sunny') {
            return 'Beach day';
        } else {
            return 'Casual day';
        }
    } else {
        if (weather === 'sunny') {
            return 'Park day';
        } else {
            if (temperature < 15) {
                return 'Stay home day';
            } else {
                return 'Museum day';
            }
        }
    }
}
const whichDayIsToday = categorizeDay(25, 'rainy')
console.log(whichDayIsToday)

// Categorize Mood
// Crea una función llamada categorizeMood que categorice el estado de ánimo según la hora del día y las condiciones climáticas.
// Tu tarea es implementar un conjunto de declaraciones if, else if y else anidadas para categorizar correctamente el estado de ánimo.
// No uses los operadores && o ||.

// La función debería categorizar el estado de ánimo de la siguiente manera:

// Si es de noche y está lloviendo, el estado de ánimo es "Melancólico".
// Si es de noche y no está lloviendo, el estado de ánimo es "Relajado".
// Si es de día y hace más de 25 grados, el estado de ánimo es "Feliz".
// Si es de día y hace menos de 25 grados, el estado de ánimo es "Tranquilo".
// En cualquier otro caso, el estado de ánimo es "Neutral".

function categorizeMood(timeOfDay, weather) {
    if (timeOfDay === 'night') {
        if (weather === 'rainy') {
            return 'Melancholic';
        } else {
            return 'Relaxed';
        }
    } else if (timeOfDay === 'day') {
        if (weather === 'sunny') {
            return 'Happy';
        } else {
            return 'Calm';
        }
    } else {
        return 'Neutral';
    }
}


console.log(categorizeMood('night', 'rainy')); 
console.log(categorizeMood('night', 'clear')); 
console.log(categorizeMood('day', 'sunny')); 
console.log(categorizeMood('day', 'cloudy')); 
console.log(categorizeMood('evening', 'windy')); 