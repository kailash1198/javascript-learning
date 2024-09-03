// Create element using js DOM
const newHeading = document.createElement("h1");
newHeading.id = "new-heading";
newHeading.className = "heading-class";
newHeading.textContent =
  "This is new heading and created by js dom manipulation";

const container = document.querySelector(".container");
const card = document.querySelector(".card");

document.addEventListener("click", () => {
  card.appendChild(newHeading);
});

const btnContainer = document.querySelector(".container");
const cardParent = document.querySelector(".cardParent");
const clickBtn = document.querySelector(".btn");

const newCard = document.createElement("div");
const heading = document.createElement("h1");
const cardPara = document.createElement("p");

heading.textContent = "My Card";
cardPara.textContent = "This is card content for dummy lookup";

newCard.className = "newCard";

clickBtn.addEventListener("click", () => {

    cardParent.appendChild(newCard);
    newCard.appendChild(heading);
    newCard.appendChild(cardPara);

});
