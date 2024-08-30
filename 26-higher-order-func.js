// Higher order function

// function funcZero(){
//     console.log("Function-0")
// }

// function funcOne() {
//   console.log("Function-1 Call");
// }

// function funcTwo() {
//   console.log("Function-2");
//   return funcOne();
// }

// funcTwo();

// Call back function ➡️ with Higher order function
// function callBackFunction(){
//     console.log("This is call back function")
// }

// function greeting(){
//     console.log("This is greeting function")
// }

// function higherOrderFunction(funcPara){
//     console.log("This is higher order function")
//     funcPara()
// }

// higherOrderFunction(greeting)

// ➡️Examples
function areaOfSqaure(length) {
  return length * length;
}

function perimeterSquare(length) {
  return 4 * length;
}

function calculateAreaWithPerimeter(length, logic) {
  const output = logic(length);
  return output;
}

console.log(calculateAreaWithPerimeter(10, areaOfSqaure));
console.log(calculateAreaWithPerimeter(5, perimeterSquare));
