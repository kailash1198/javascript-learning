// Returning function with closure

function outerFunction() {
  let userName = "User123";
  console.log("Outer Function");
  function innerFunction() {
    console.log("Inner Function");
    console.log(userName);
  }
  return innerFunction();
}

outerFunction();
