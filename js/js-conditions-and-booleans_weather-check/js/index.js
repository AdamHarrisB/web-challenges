// Change this value to test different "weather" conditions.
const weather = "rainy"



// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22; 

/*switch (weather)
{
 case "rainy":
    console.log ("it's rainy")
break;
 case "sunny":
    console.log = ("it's sunny")
 break;
default:
    text = "we don't know";
}*/

switch (true)
{
    case (weather === "sunny" && temperature >= 20):
        console.log("it's sunny and warm")
        break;
    case (weather === "sunny" && temperature < 20):
        console.log("it's sunny but cold")
        break;
    case (weather === "rainy"):
        console.log("it's rainy bring an umbrella");
        break;
    default:
        console.log ("I don't know what the weather will be like");
}