// const heading = document.querySelector('.heading')

// console.log(localStorage.userName)
// console.log(localStorage.getItem('userName'))

// Get prompt from user

const userName = document.querySelector(".userName-input");
const userPassword = document.querySelector(".userPassword-input");
const logInBtn = document.querySelector(".btn");
let logMessege = document.querySelector(".messege");
var userNameInput;
var userPasswordInput;

userName.addEventListener("input", (e) => {
  userNameInput = e.target.value;
});

userPassword.addEventListener("input", (e) => {
  userPasswordInput = e.target.value;
});

logInBtn.addEventListener("click", () => {
  if (
    userNameInput == localStorage.getItem("userName") &&
    userPasswordInput == localStorage.getItem("userPassword")
  ) {
    // alert("Log in Sucess");
    logMessege.innerHTML = "Log in Sucess";
    logMessege.style.color = "green";
    localStorage.removeItem("userName", "kailash");
    localStorage.removeItem("userPassword", "123");
  } else {
    // alert("Username and Password wrong");
    logMessege.innerHTML = "Username and Password Wrong";
    logMessege.style.color = "red";
  }
});
