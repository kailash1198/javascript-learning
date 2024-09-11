const addBtn = document.querySelector(".btn");
const container = document.querySelector(".container");

let num = 0;

addBtn.addEventListener("click", () => {
  let divCard = document.createElement("div");
  let checkIconDiv = document.createElement("div");
  let taskDiv = document.createElement("div");
  let imageTag = document.createElement("img");
  let taskTag = document.createElement("input");
  //for after remove input tag after input text
  let finalTask = document.createElement("p");
finalTask.className = "finalTask"

  divCard.className = "card";
  checkIconDiv.className = "check-icon";
  taskDiv.className = "task";
  taskTag.placeholder = "Enter task Name";

  imageTag.src = "/image.png";
  imageTag.classList.add("uncheck-style");
  container.appendChild(divCard);
  divCard.appendChild(checkIconDiv);
  divCard.appendChild(taskDiv);

  checkIconDiv.appendChild(imageTag);
  taskDiv.appendChild(taskTag);

  //   input tag

  taskTag.focus();
  taskTag.addEventListener("blur", (e) => {
    if (e.target.value.trim() == "") {
      addBtn.disabled = "true";
    } else {
      num++;
      localStorage.setItem(`taskOne-${num}`, e.target.value);
      taskTag.remove();
      taskDiv.appendChild(finalTask);
      finalTask.innerText = localStorage.getItem(`${num}`, e.target.value)
    }
  });
});
