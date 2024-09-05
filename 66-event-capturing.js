// Event Capturing

const container = document.querySelector(".card_container");
const outerCard = document.querySelector(".card_outer");
const innerCard = document.querySelector(".card_inner");

container.addEventListener(
  "click",
  (e) => {
    console.log("Container clicked");
    // e.stopPropagation()
  },
  true
);

outerCard.addEventListener(
  "click",
  (e) => {
    console.log("outer clicked");
    // e.stopPropagation()
  },
  true
);

innerCard.addEventListener(
  "click",
  (e) => {
    console.log("inner clicked");
    // e.stopPropagation()
  },
  true
);

// container.addEventListener("click", () => {
//   console.log("Container clicked");
// });

// outerCard.addEventListener("click", () => {
//   console.log("outer clicked");
// });

// innerCard.addEventListener("click", () => {
//   console.log("inner clicked");
// });
