const progressBar = document.getElementById("task_progress_bar");
const progressMessage = document.getElementById("progressPara");

// let taskOne = document.getElementById('checkOne')
// let taskTwo = document.getElementById('checkTwo')
// let taskThree = document.getElementById('checkThree')

let allTask = [
  document.getElementById("checkOne"),
  document.getElementById("checkTwo"),
  document.getElementById("checkThree"),
];

let inputField = [
  document.getElementById("inputOne"),
  document.getElementById("inputTwo"),
  document.getElementById("inputThree"),
];
let allCard = [
  document.getElementById("card-1"),
  document.getElementById("card-2"),
  document.getElementById("card-3"),
];



for(let i=0; i<3; i++){
    inputField[i].addEventListener("blur", (e) => {
        inputField[i].remove();
        let userInput = e.target.value;
        let newTaskText = document.createElement("p");
        newTaskText.innerText = userInput;
        allCard[i].appendChild(newTaskText);

        if (progressBar.getAttributeNode("value").value !=0){
            newTaskText.classList = "strike"
        }

      });    
}

for (let i = 0; i < 3; i++) {
  allTask[i].addEventListener("click", () => {
    if (progressBar.getAttributeNode("value").value == 0) {
      progressBar.getAttributeNode("value").value = 1;
      allTask[i].className = "fa-solid fa-circle-check";
    } else if (progressBar.getAttributeNode("value").value == 1) {
      progressBar.getAttributeNode("value").value = 2;
      allTask[i].className = "fa-solid fa-circle-check";
    } else if (progressBar.getAttributeNode("value").value == 2) {
      progressBar.getAttributeNode("value").value = 3;
      allTask[i].className = "fa-solid fa-circle-check";
      progressMessage.innerText = "All task Completed";
      progressMessage.style.color = "green";
    }
    //   alert("Task-1");
  });
}
