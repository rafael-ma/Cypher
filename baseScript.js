// Variables
const positionString = 'abcdefghijklmnopqrstuvwxyz0123456789'

const password = 'rafael'
const rePositionString = 'abcdefghijklmnopqrstuvwxyz0123456789'
const specialCharacter = '@'
const numCharacters = specialCharacter != '' ? 16 - 1 : 16
const isCaptalized = true

function cypher(positionString, password, rePositionString, numCharacters, specialCharacter, isCaptalized) {
    // Take the string and just multiply it until have the number of characters
    let newPassword = password
    while (newPassword.length <= numCharacters) {
        newPassword += password
    }

    newPassword = newPassword.slice(0, numCharacters)
    console.log(newPassword)

    // Gets the position of each string's character in position key
    let passwordPos = []
    for (i in newPassword) {
        passwordPos.push(positionString.indexOf(newPassword[i]))
    }
    console.log(passwordPos)

    // Create a Fibonacci sequence with the number of terms declared
    let fibonacciSequence = []
    let n0 = 1
    let n1 = 1
    for (i=0; i < passwordPos.length; i++) {
        fibonacciSequence.push(n1)
        let n2 = n0 + n1
        n0 = n1
        n1 = n2 
    }
    console.log(fibonacciSequence)

    //Create a new array by sum each term of the arrays
    let positionSum = []
    for (i in passwordPos) {
        positionSum.push(passwordPos[i] + fibonacciSequence[i])
    }
    console.log(positionSum)

    // Transform the sum in coded string
    let arrayString = []

    for (i in positionSum) {
        if (positionSum[i] >= rePositionString.length) {
            arrayString.push(rePositionString[positionSum[i] % rePositionString.length])
        } else {
            arrayString.push(rePositionString[positionSum[i]])
        }
    }
    const string = arrayString.join('')
    console.log(string)
    
    // Format the string accordding user inputs
    const formatted = isCaptalized ? string.charAt(0).toUpperCase() + string.slice(1) : string
    console.log(formatted)

    const code = specialCharacter + formatted
    console.log(code)
}

cypher(positionString, password, rePositionString, numCharacters, specialCharacter, isCaptalized)