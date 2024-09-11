const container = document.querySelector(".container");
const mainContainer = document.querySelector(".main");
const loadBtn = document.querySelector(".loadMore");

loadBtn.addEventListener("click", () => {
  const cloneContainer = container.cloneNode(true);
  mainContainer.appendChild(cloneContainer);
});
