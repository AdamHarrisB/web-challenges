console.clear();

const form = document.querySelector('[data-js="form"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

  /*console.log(formElements.firstName.value);
  console.log(formElements.lastName.value);
  console.log(formElements.age.value);
  console.log(formElements.email.value);
  console.log(formElements.complaint.value);
  console.log(formElements.details.value);
  console.log(formElements.badness.value);
  console.log(formElements.orderDate.value);
  console.log(formElements.tos.value);
  console.log("age-badness is " + formElements.badness.value + formElements.age.value)
*/

const formData = new FormData(event.target);

//accesses all form data

const data = Object.fromEntries(formData);

//transforms FormData into useable object

  console.log(data);
// logs the constant "data"

  console.log("age-badness is " + formElements.badness.value + formElements.age.value);
// displays age age-badness as two strings together

  event.target.reset();
 // resets the form


});
