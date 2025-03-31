console.clear();

const inputElement = 
document.querySelector('[data-js="first-input"]');

const buttonup = 
document.querySelector('[data-js="button-uppercase"]');

buttonup.addEventListener("click", () => {
    userInput.value.toUpperCase();
    inputElement.value = inputElement.value.toUpperCase();
});