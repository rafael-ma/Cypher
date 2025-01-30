// Variables

const positionString = 'abcdefghijklmnopqrstuvwxyz0123456789'
const password = 'rafael'
const numCharacters = 16 - 1
const rePositionString = 'abcdefghijklmnopqrstuvwxyz0123456789'
const specialCharacter = ''
const isCaptalized = true

// Take the string and just multiply it until have the number of characters
function multiplyStyring(string, characters) {
    handle = string
    while (handle.length <= characters) {
        handle += string
    }
    console.log("multiplyStyring:", handle.slice(0,characters))
    return handle.slice(0,characters)
}

// Gets the position of each string's character in position key
function position(string, key) {
    let handle = []
    for (i in string) {
        handle.push(key.indexOf(string[i]))
    }

    console.log("position:", handle)
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

    console.log("fibonacciSequence:", sequence)
    return sequence
}

//Create a new array by sum each term of the arrays
function arraySum(array1, array2) {
    let array = []
    for (i in array1) {
        array.push(array1[i] + array2[i])
    }

    console.log("arraySum:", array)
    return array
}

// Transform de sum in coded string
function codeString(array, key) {

    let handle = []

    for (i in array) {
        if (array[i] >= key.length) {
            handle.push(key[array[i] % key.length])
        } else {
            handle.push(key[array[i]])
        }
    }

    console.log("codeString:", handle.join(''))
    return handle.join('')
}

// Format the string accordding user inputs
function format( condition, string) {
    let code = condition ? string.charAt(0).toUpperCase() + string.slice(1) : string
    return code + specialCharacter
}

console.log(
        format(
        isCaptalized, 
        codeString(
            arraySum(
                position(
                    multiplyStyring(
                        password, 
                        numCharacters
                    ), 
                    positionString
                ), 
                fibonacciSequence(numCharacters)
            ), 
            rePositionString
        )
    )
)