// Hoisting concept
console.log(myVar)
var myVar=5
console.log(myVar)


myFunc()

function myFunc(){
    console.log('Hello World')
}