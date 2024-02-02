function displayMessage(x) {
    let message = 'Hello'
    if (x) {
        message = 'Hello, this is a scope problem!'
    }
    return message

}

const scopeProblem = displayMessage(1)
console.log(scopeProblem)