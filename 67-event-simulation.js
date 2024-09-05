// Event Simulation
// var container = document.querySelector(".card_container");
// const outerCard = document.querySelector(".card_outer");
// const innerCard = document.querySelector(".card_inner");
// /Method: 01
// container.addEventListener("click", () => {
//   console.log("Container clicked");
// });
// container.click();

//Method: 02 - custum event

// container.addEventListener("costumEvent", function() {
//   console.log("Custum event triggred");
// });
// var costumEvent = new Event("myEvent")
// container.dispatchEvent(costumEvent)

// const clickBtn = document.getElementById("btn");
// const cardContainer = document.querySelector(".card_container");

// const newDiv = document.createElement("div");
// const newHeading = document.createElement("h1");
// const newPara = document.createElement("p");

// newDiv.classList.add("card");

// const cardCollection = [];

// clickBtn.addEventListener("click", () => {
//   setInterval(() => {
//     for (let i = 0; i < 1; i++) {
//       cardCollection[i] = newDiv.cloneNode(true);
//       cardContainer.appendChild(cardCollection[i]);
//     }
//   }, 1000);
// });

// clickBtn.click()
