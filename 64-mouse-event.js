// Mouse event in js

const container = document.querySelector(".container");
const card = document.querySelector(".card");
const image = document.querySelector(".image");

const imgID = document.getElementById("img");

image.addEventListener("mouseover", () => {
  //   alert("Mouse hover");
  //   image.className = "image-zoomed";
  //   image.classList.add("image-zoomed");
  //   image.classList.remove('image')
//   imgID.style.transform = "scale(1.5)";
});

image.addEventListener("mouseout", () => {
  // alert("Mouse out")
  //   image.remove("image-zoomed");
  //   image.classList.remove("image-zoomed");
  //   image.classList.add("image");
//   imgID.style.transform = "scale(1)";
});

// image.addEventListener("mousemove", () => {
//   alert("Mouse move");
// });
// image.addEventListener("mousedown", () => {
//   alert("Mouse down");
// });


// const menuBar = document.getElementById('menuBar')
// image.addEventListener("mouseup", () => {
//   menuBar.style.visibility = "visible"
//   menuBar.style.transition = "all 0.5s"
// });
