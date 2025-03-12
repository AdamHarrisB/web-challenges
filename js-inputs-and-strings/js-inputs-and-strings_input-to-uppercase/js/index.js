console.clear();

const userName = "Adam";
const stringConcatenation = "Hello" + userName + "!";

console.log(stringConcatenation)

const withTemplateString = `Hello ${userName}, good to see you!`;
const greeting = `Hello ${userName !== null ? userName : "mysterious person"}, good to see you!`;

console.log(greeting)

"A normal string".length; // evaluates to 15
"A normal string".toUpperCase(); // evaluates to "A NORMAL STRING"

"What happens to this STRING".toLowerCase();

const nameInput = document.querySelector('[data-js="nameInput"]');

nameInput.value; 