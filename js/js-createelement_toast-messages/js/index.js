console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
//const toastMessage = document.createElement("li");

addButton.addEventListener("click", () => {
  //create a const value linked to document createElement and the type ("li")

  //can I define toastMessage at the start of the document and still have this work?
    //const toastMessage = document.createElement("li");
  //I can, but it only generates a single message, and then resets.
  const toastMessage = document.createElement("li");
  //assign the class of toast container message to the toast message
  toastMessage.className = "toast-container__message";
  //add text content to the toast message
  toastMessage.textContent = "New toast message";
  //now append the toastMessage li element to the parent element toastContainer
  //which is an ordered list
  toastContainer.append(toastMessage);

  console.log("testing!");
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
//do I need to define the toast-container here again?

  //const toastContainer = document.querySelector('[data-js="toast-container"]');

//I do not, as it is defined at the top of the document
  toastContainer.innerHTML = "";
  console.log("Clear testing!");

});
