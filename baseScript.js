// Variables

const positionString = 'abcdefghijklmnopqrstuvwxyz0123456789'
const password = 'rafael'
const numCharacters = 16 - 1
const rePositionString = 'abcdefghijklmnopqrstuvwxyz0123456789'
const specialCharacter = '-'

// Take the string and just multiply it until have the number of characters
function multiplyStyring(string, characters) {
    handle = string
    while (handle.length <= characters) {
        handle += string
    }

    return handle.slice(0,characters)
}

// Gets the position of each string's character in position key
function position(string, key) {
    let handle = []
    for (i in string) {
        handle.push(key.indexOf(string[i]))
    }

    return handle
}

// Create a Fibonacci sequence with the number of terms declared
function fibonacciSequence(n) {
    let sequence = []
    let n0 = 1
    let n1 = 1
    for (i=0; i < n; i++) {
        sequence.push(n1)
        let n2 = n0 + n1
        n0 = n1
        n1 = n2 
    }

    return sequence
}

//Create a new array by sum each term of the arrays
function arraySum(array1, array2) {
    let array = []
    for (i in array1) {
        array.push(array1[i] + array2[i])
    }

    console.log(array)
}
