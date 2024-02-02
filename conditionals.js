// Create a function checkLottery that takes 2 parameters: ticketNumber and winningTicket.
// Create a variable message within the local scope of the function.
// Using an "if/else" conditional statement, change the value of message to "Winner" if ticketNumber matches the winningTicket, or "Loser" otherwise.
// Return the value of message.

// function checkLottery(ticketNumber, winningTicket){
//     if(ticketNumber === winningTicket){
//         let message = 'Winner'
//         return message
//     } else {
//         let message = 'Loser'
//         return message
//     }
// }

// const tryToWin = checkLottery(969, 999)
// console.log(tryToWin)

// Improve the following conditional statement, so that it can handle bookings longer than 30 days, in which case log the phrase: "Please contact us for monthly bookings".

// bookingDays = 25
// let output = ''
// if (bookingDays < 30) {
//   output = 'Your booking is being processed'
//   return output
// } else {
//     output = 'Please contact us for monthly bookings'
//     return output
// }

// Create a function categorizeDay that categorizes the day based on temperature and weather conditions.
// Your task is to implement a set of nested if, else if, and else statements to accurately categorize the day.
// Don't use the && or || symbols.

// The function should categorize the day as follows:

// If the temperature is 25 degrees or above and it's sunny, it's a "Beach day".
// If it's sunny but the temperature is below 25 degrees, it's a "Park day".
// If it's rainy and the temperature is below 15 degrees, it's a "Stay home" day.
// If it's rainy but the temperature is 15 degrees or above, it's a "Museum day".
// In all other cases, it's a "Casual day".

function categorizeDay(temperature, weather){
    if(temperature >= 25){
        if(weather === 'sunny'){
            return 'Beach day'
        } else if(temperature < 25){
            if(weather === 'sunny'){
                return 'Park day'
            } else if(temperature < 15){
                if(weather === 'rainy'){
                    return 'Stay home day'
                } else if(temperature >= 15){
                    if(weather === 'rainy'){
                        return'Museum day'
                    } else {
                        return 'Casual day'
                    }
                }
            }
        }
    }
}

const whichDayIsToday = categorizeDay(15, 'rainy')
console.log(whichDayIsToday)
