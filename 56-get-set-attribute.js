// Get and Set Attributes

// let headingTag = document.getElementById('heading-1')
// let getAttribute = headingTag.getAttribute('id')
// console.log(getAttribute) //you get id value from html heading tag

// headingTag.setAttribute('id', 'new-heading')
// let newHeading = document.getElementById('new-heading')
// newHeading.innerText = "New Heading Changed"

// let removeAtt = document.getElementById('heading-1')
// headingTag.removeAttribute('id')
// removeAtt.innerText = "Remove"

let card = document.getElementById("card");
card.addEventListener("click", () => {
  card.setAttribute("class", "card-black");
  card.style.transition = 'all 0.9s'
});
