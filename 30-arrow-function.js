// Arrow Function
const arrowFunction = () => {
  console.log("Arrow Function");
};

arrowFunction();

const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));

setTimeout(()=>{
    console.log("Hello")
}, 2000)