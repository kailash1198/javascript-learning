const message = 'Hello'
console.log(message[0])

console.log(message.length)


let newStr = message.toUpperCase()
console.log(newStr)

const faltuMesage = "    Hi, am Kailash        "
let finalMsg = faltuMesage.trim()
console.log(finalMsg)

let checkWord = finalMsg.includes('kKilash') //true/false
console.log(checkWord)

console.log(finalMsg[0])

console.log(finalMsg.indexOf('H'))

console.log(finalMsg.replace('Hi', "Hello"))

const lastFourDigit = '1234'
console.log(lastFourDigit.padStart(10, '*'))
console.log(lastFourDigit.padEnd(10, '*'))

//template literals
console.log(`My name is ${finalMsg}`)

