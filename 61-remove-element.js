// Remove element using javascript

const headingTag = document.querySelector(".heading");
const btn = document.querySelector(".btn");

const cardParent = document.querySelector(".cardParent");

// btn.addEventListener("click", () => {
//   headingTag.remove();
// });

btn.addEventListener("click", () => {
  cardParent.removeChild(headingTag);
});
