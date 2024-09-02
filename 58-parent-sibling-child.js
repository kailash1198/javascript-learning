// Access Parent, sibling and Childrens
const childNode = document.querySelector('#heading-1')
const parentNode = childNode.parentElement;

console.log(parentNode)
console.log(parentNode.childNodes)

console.log(childNode.childNodes)