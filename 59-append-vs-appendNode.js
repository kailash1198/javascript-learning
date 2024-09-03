// append VS appendNode in javascript
// console.log("Append vs AppendNode in JavaScript")

const container = document.querySelector(".container");
const card = document.querySelector(".card");
const heading = document.querySelector(".heading");
const subCard = document.querySelector(".sub-card");
const paraTag = document.querySelector(".para");

// document.addEventListener('click', ()=>{
//     card.appendChild(subCard)
//     container.appendChild(heading)
// })

// const cloneNode = heading.cloneNode(true);
// document.addEventListener("click", () => {
//   subCard.append(heading);
//   subCard.append(paraTag);
//   subCard.append(cloneNode);
// });

// const cloneCard = card.cloneNode(true)
// const cloneCardTwo = card.cloneNode(true)

// document.addEventListener('click', ()=>{
//     container.appendChild(cloneCard)
//     container.appendChild(cloneCardTwo)
// })

// Print 100 clone card of card-1 using loops
// const cloneCardCollection = [];

// for (let i = 0; i < 100; i++) {
//   cloneCardCollection[i] = card.cloneNode(true);
// }
// document.addEventListener("click", () => {
//   for (let i = 0; i < 100; i++) {
//     container.appendChild(cloneCardCollection[i]);
//   }
  
// });


// console.log(container.append(heading))

console.dir(container.appendChild(heading))
