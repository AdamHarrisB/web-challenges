console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD){
    console.log("Welcome! You are logged in as Brunhilde1984.")
} else {
    console.log("Access denied")
}

const isSunShining = true;

if (isSunShining) {
    console.log("hooray")
} else {
    console.log("oh no")
}

const isSunShining = true;

const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
    console.log("Welcome! You are logged in as Brunhilde1984.")
} else {
    console.log("Access Denied")
}


// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let hotdogPrice = 2

if (numberOfHotdogs >= 1000000) {
    hotdogPrice = 0.10
} else if (numberOfHotdogs >= 100) {
    hotdogPrice = 1
} else if (numberOfHotdogs >= 5) {
    hotdogPrice = 1.50
} else {
}

console.log(hotdogPrice)
console.log(numberOfHotdogs*hotdogPrice)

// Part 4: Daytime
//### Part 4: Daytime
//- use a ternary operator to define the `statement` variable as follows:
//- if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
//- if the currentHour is greater or equal to 17 it should equal "Partytime!!!"

const currentHour = 12;

const statement = currentHour >= 17 ? "Partytime!!!" : "Still need to learn...";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
