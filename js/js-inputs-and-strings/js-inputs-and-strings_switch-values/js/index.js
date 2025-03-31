console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');

const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

switchButton.addEventListener("click", () => {
  let firstInputContent = firstInput.value;
  let secondInputContent = secondInput.value;
  secondInput.value = firstInputContent;
  firstInput.value = secondInputContent;
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});
