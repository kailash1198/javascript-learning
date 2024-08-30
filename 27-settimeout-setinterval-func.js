// Set time out function
// Set interval function

// Set time out function

// let timeOut = setTimeout(function funcOne() {
//   console.log("Function-1");
// }, 2000);

// clearTimeout(timeOut)

let intervalFunc = setInterval(function funcOne(){
    console.log("Hello-1")
}, 2000)

setTimeout(function stop(){
    clearInterval(intervalFunc)
}, 10000)

// clearInterval(intervalFunc)