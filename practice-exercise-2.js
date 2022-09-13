/*
variables to be created:
OS = "Mac", "Windows"
TYPE = "Desktop"," All in One", "Laptop"
VALUE = 100, 200, "n/a"

output for OS:
"Incredible Mac" OR "Super Windows"

output for TYPE:
- "It's a Desktop"
- "It's an All in One"
- "It's a Laptop"

output for value:
100 --> "The price is $100, awesome discount!!"
200 --> "The price is $200, super deal."
"n/a" --> "There is no price available"
*/

var os = "Windows";
var type = "Labtop";
var value = 2000;

if (os === "Mac") {
  console.log("Incredible Mac");
} else {
  console.log("Super Windows");
}

if (type === "Desktop") {
  console.log("It's a Desktop");
} else if (type === "Labtop") {
  console.log("It's a Labtop");
} else if (type === "All in One") {
  console.log("It's an All in One");
} else {
  console.log("It's a computer");
}

switch (value) {
  case 100:
    console.log("The price is $100, awesome discount!!");
    break;
  case 200:
    console.log("The price is $200, super deal.");
    break;
  default:
    console.log("The price is $" + value);
}
