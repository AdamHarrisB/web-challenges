console.clear();

const firstInput = document.querySelector('[data-js = "userInput"]');
const buttonUppercase = document.querySelector(
    '[data-js="button-uppercase"]'
);

buttonUppercase.addEventListener("click", () => {
    firstInput.value = firstInput.value.toUpperCase();
});
