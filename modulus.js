function evenOrOdd(number){
    if(number % 2 === 0){
        return 'even'
    } else {
        return 'odd'
    }
}

const checkNumber = evenOrOdd(3)
console.log(checkNumber)