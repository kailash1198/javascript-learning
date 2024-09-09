const addTaskBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");
let taskProgressBar = document.getElementById("task_progress_bar");
var progressNum = 0;
var maxGoal = 0;

addTaskBtn.disabled = false; // Ensure the button is enabled initially

addTaskBtn.addEventListener("click", function () {
  taskContainer.style.transition = "all 1s";
  let divTag = document.createElement("div");
  let inputTag = document.createElement("input");
  let checkingIconTag = document.createElement("i");

  divTag.className = "task";
  checkingIconTag.className = "fa-regular fa-circle";
  inputTag.className = "margin-left task-input";
  inputTag.placeholder = "Enter task Name";

  divTag.appendChild(checkingIconTag);
  divTag.appendChild(inputTag);
  taskContainer.appendChild(divTag);

  addTaskBtn.disabled = true; // Disable the button while entering the task

  inputTag.focus(); // Automatically focus the input field for the user to enter text

  inputTag.addEventListener("blur", () => {
    let inputValue = inputTag.value.trim();
    if (inputValue === "") {
      divTag.remove();
      maxGoal--;
      taskProgressBar.max = maxGoal;
    } else {
      var taskAddPara = document.createElement("p");
      taskAddPara.className = "task-added";
      divTag.appendChild(taskAddPara);
      inputTag.remove();
      taskAddPara.innerText = inputValue;
      taskAddPara.style.width = "100%";
      taskAddPara.style.marginLeft = "1rem";
      maxGoal++;
      taskProgressBar.max = maxGoal;
    }

    checkingIconTag.addEventListener("click", () => {
      if (checkingIconTag.classList.contains("fa-circle")) {
        progressNum++;
        checkingIconTag.classList.remove("fa-circle");
        checkingIconTag.classList.add("fa-check-circle");
        checkingIconTag.style.color = "green";
        taskAddPara.style.color = "green";
        taskAddPara.classList.add("strikeClass");
        taskProgressBar.value = progressNum;
      } else {
        progressNum--;
        checkingIconTag.classList.remove("fa-check-circle");
        checkingIconTag.classList.add("fa-circle");
        taskAddPara.style.color = "black";
        checkingIconTag.style.color = "black";
        taskAddPara.classList.remove("strikeClass");
        taskProgressBar.value = progressNum;
      }
    });

    divTag.addEventListener("dblclick", () => {
      maxGoal--
      divTag.remove();
      alert("Task Removed");
      taskProgressBar.max = maxGoal;
    });

    addTaskBtn.disabled = false; // Re-enable the button in both cases (valid or empty input)
  });



  // Optional: Re-enable the button if the user starts typing in the input field
  inputTag.addEventListener("input", () => {
    addTaskBtn.disabled = false; // Enable the button once there is input
  });
});
