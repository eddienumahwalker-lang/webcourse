
const ulElement = document.querySelector('ul');

console.log(ulElement.parentElement);

const secondLi = ulElement.children[1];
console.log(secondLi);

console.log(secondLi.nextElementSibling);

console.log(secondLi.previousElementSibling);
