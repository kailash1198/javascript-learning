// Event Loop

console.log("Hello-1");
console.log("Hello-2");

for (let i = 0; i < 4; i++) {
  console.log(i);
}

//this ignore and read in last
setTimeout(function () {
  console.log("TimeOut function");
}, 0);

console.log("Last- hello");
