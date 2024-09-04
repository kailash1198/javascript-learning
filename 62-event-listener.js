// Event Listener

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', ()=>{
//     console.log("Click Event happend")
// })

// btn.addEventListener('dblclick', ()=>{
//     console.log("Double clicked")
// })

// window.addEventListener('resize', ()=>{
//     alert("Window is resized")
// })

// window.addEventListener('load', ()=>{
//     alert("All content loaded in your browser")
// })

const newTaskBtn = document.querySelector(".btn");
const cardParent = document.querySelector(".cardParent");
let howMany = 0;
newTaskBtn.addEventListener("click", () => {
  howMany=1
  let newCheckBox = [];

  for (let i = 0; i < howMany; i++) {
    newCheckBox[i] = document.createElement("input");
    newCheckBox[i].className = "checkBox";
    newCheckBox[i].type = "checkbox";
  }

  for (let i = 0; i < howMany; i++) {
    cardParent.appendChild(newCheckBox[i]);
  }
});
