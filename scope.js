function displayMessage(x) {
    if (x > 0) {
        let message = 'Hello, this is a scope problem!'
        return message
    } else {
        let message = 'Hello'
        return message
    }
}

const scopeProblem = displayMessage(0)
console.log(scopeProblem)