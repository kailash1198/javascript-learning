let btn = document.querySelectorAll(".btnClass");

const card = document.querySelector(".card");

const mainBtn = document.querySelector(".btn");
const cancelBtn = document.querySelector(".cancelBtn");
const confirmBtn = document.querySelector(".confirmBtn");

btn.forEach((element) => {
  element.addEventListener("mouseover", () => {
    card.style.boxShadow = "50px 20px 200px 20px rgba(270, 73, 229, 0.959)";
    card.style.transition = "all 0.5s";
  });

  element.addEventListener("mouseout", () => {
    card.style.boxShadow = "50px 2px 200px 2px rgba(105, 115, 133, 0.859)";
    card.style.transition = "all 0.5s";
  });
});

mainBtn.addEventListener("click", () => {
  card.style.visibility = "visible";
});

cancelBtn.addEventListener("click", () => {
  card.style.visibility = "hidden";
});

confirmBtn.addEventListener("click", () => {
  card.style.visibility = "hidden";
  window.open("https://www.kailashkumar.com")
});
