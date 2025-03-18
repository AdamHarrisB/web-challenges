console.clear();

// EXERCISE 1
// Create an object `personWithNameAgeEmail` with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  example: "example",
};

const personWithNameAgeEmail = {
  name: "adam",
  age: 35,
  email: "adam@email.com",
};

console.log(personWithNameAgeEmail)

// EXERCISE 2
// Set the values of `nameOfAlex` and `ageOfAlex` to match the corresponding values in the `personAlex` object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = "Alex";
const ageOfAlex = 24;

// EXERCISE 3
// Change the `name` to "Alex" and `age` to "35" by updating the `personToChange`object: `person.existingProperty = newValue`.

const personToChange = {
  name: "Kim",
  age: 24,
};

personToChange.name = "Alex";
personToChange.age = 24;

console.log(personToChange);

// EXERCISE 4
// Add the properties `age` with value "5" and `breed` with value "husky" to the `petPluto` object: `pet.newProperty = newValue`.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

petPluto.age = 5;
petPluto.breed = "husky";

console.log(petPluto);

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
