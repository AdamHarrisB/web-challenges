console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
    console.log("Welcome! You are logged in as Brunhilde1984.");
}
else {
    console.log("Access Denied")
};

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000;
let hotDogPrice = 2;

if (numberOfHotdogs <= 5) {
    hotDogPrice = 2
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
    hotDogPrice = 1.5
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 10000000) {
        hotDogPrice = 1
} else if (numberOfHotdogs > 10000000) {
        hotDogPrice = 0.1
}

console.log("Price of one hot dog is: " + hotDogPrice)
console.log("Total price: " + (numberOfHotdogs * hotDogPrice))

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour > 17 ? "Party Time!" : "Still have to work";

console.log(statement);

// Part 5: Greeting

const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
