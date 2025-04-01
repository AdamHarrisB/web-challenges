console.clear();

const inputElement = document.querySelector('[data-js="userInput"]');
const buttonElement = document.querySelector('[data-js="button-uppercase"]');

buttonElement.addEventListener("click", () => {
  inputElement.value = inputElement.value.toUpperCase();
});

const box = document.querySelector('["data-js="box"]');
const colorSlider = document.querySelector('[data-js="input-color"]');
const borderSlider = document.querySelector('[data-js="input-radius"]');
const rotationSlider = document.querySelector('[data-js="input-rotation"]');

colorSlider.addEventListener("input", () => {
  const color = colorSlider.value;
  box.style.backgroundColor = `hsl(${color}, 100%, 50%)`;
} );


borderSlider.addEventListener()
rotationSlider.addEventListener()

//BUT Why?! Details below:

/*
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
nameInput.value = "Adam";


nameInput.addEventListener("input", () => {
    const oldValue = nameInput.value;
    const newValue = oldValue.toUpperCase();
    nameInput.value = newValue;
  });
*/

