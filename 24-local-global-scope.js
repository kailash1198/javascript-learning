// Scope - Local and Global

// Local Scopes
// function greeting(){
//     let greetWord = 'Welcome to Dashboard'
//     console.log(greetWord)
// }

// greeting()
// console.log(greetWord) // Not work because variable are in local scope so you caanot access outside of function

// let greetMessage = "Welcome to India";

// function greetBrother() {
//   console.log(greetMessage);
// }

// greetBrother();

// {
//   let userName = "Kailash";
//   console.log(userName);
// }
// console.log(userName)//Error because out of block scope


function outerFunction(){
    let outerFunctionVar=100
    function innerFunction(){
        console.log(outerFunctionVar)
    }
    innerFunction()
}

outerFunction()
