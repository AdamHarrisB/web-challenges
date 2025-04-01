console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--

for (const programmingLanguage of programmingLanguages) {
  //this is a test of the for of loop
  console.log(programmingLanguage);
  //define a new constant li
  const li = document.createElement("li");
  //add text content to the li element
  li.textContent = programmingLanguage;
  //append a li to the ordered list element
  ol.append(li);

}

// --^-- write or modify code above this line --^--
