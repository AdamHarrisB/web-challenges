console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.
node index.js 32
💡 For simplicity, ignore leap years.
*/

const currentAge = 50; // This takes the `<age>` entered in the command `node index.js <age>`.
const averageLife = (80 * 365);
const dayAge = (currentAge * 365)
const percentLife = (dayAge / averageLife * 100)
const sleepDays = (dayAge / 3)

console.log("Your current age is: " + currentAge);
console.log("You are " + 365 * currentAge + " days old");
console.log("You have " + (averageLife - 365 * currentAge) + " left to live on average")
console.log("You have lived " + (percentLife) + "% of your life")
console.log("You have slept " + sleepDays + " days")

