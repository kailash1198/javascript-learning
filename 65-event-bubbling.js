// Event Bubbling

const cardContainer = document.querySelector(".card_container");
const outerCard = document.querySelector(".card_outer");
const innerCard = document.querySelector(".card_inner");

cardContainer.addEventListener("click", () => {
  console.log("Container event listener triggred");
});

outerCard.addEventListener("click", (e) => {
  console.log("Outer card event listner triggred");
  e.stopPropagation() //for stop bubbling
});

innerCard.addEventListener("click", (e) => {
  console.log("Inner card event listner triggred-1");
  e.stopPropagation() //for stop bubbling
  e.stopImmediatePropagation()
});

innerCard.addEventListener("click", (e) => {
  console.log("Inner card event listner triggred-2");
  e.stopPropagation() //for stop bubbling

});
