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

