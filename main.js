//--- VARIABLE TYPES ---
// var Bambi = "Bambi";
// var myFirstName = Bambi;
// var myNumber = 5;
// let boolean = false;
// let Array = [32, "Spirited Away", true];
// let Object = {
//   name: "Bambi",
//   lastName: "Teague",
// };

//--- IF STATEMENTS ---
// let userName = "Bambi22";
// let lastName = "Teague";

// if (userName) {
//   //   console.log("Has a Username");
// } else if (lastName) {
//   console.log("Has a Last Name");
// } else {
//   console.log("Please log in");
// }

//--- CONDITIONALS ---
// let testUsername = "BamsJames";

// if (testUsername === "Bams") {
//   console.log("It's Bams!!");
// } else {
//   console.log("this is not Bams");
// }

//--- SWITCH STATEMENTS ---
// let slot = 5;

// switch (slot) {
//   case 1:
//     console.log("won a TV");
//     break;
//   case 2:
//     console.log("won a PS5");
//     break;
//   case 3:
//     console.log("won a PC");
//     break;
//   case 4:
//     console.log("won a guitar");
//     break;
//   case 5:
//     // console.log("won a Bike");
//     break;
//   default:
//     console.log("spin the wheel again");
//     break;
// }

//--- OPERATORS ---

//--- ADDITION ---
// let previous = 200;
// let current = 100;
// let total = "The value is: " + (previous + current);
// console.log(total); //simple math! concat strings!

// current += previous;
// console.log(current);

// userName = "Bams";
// let message = "Welcome back, " + userName;
// console.log(message);

//--- SUBTRACTION ---
// let newTotal = "total amount is: " + (previous - current);
// console.log(newTotal);
// let newMessage = "Welcome back " - userName;
// console.log(newMessage);

//--- MULTIPLY ---
// total = "total amount is " + previous * current;
// console.log(total);

//--- DIVIDE ---
// total = "total amount is " + previous / current;
// console.log(total);

//--- COMPARE ---
// console.log(2 == '2'); // TRUE
// console.log(2 === '2'); // FALSE
// console.log(2 === 2); // TRUE
// console.log(2 != 2) // FALSE
// console.log(2 != '2') // FALSE
// console.log(2 !== '2') // TRUE
// console.log('James' == 'James') // true

//--- GREATER THAN, LESS THAN ---
// console.log(2 > 2); // FALSE
// console.log(5 > 2); // TRUE
// console.log(2 >= 2); // TRUE
// console.log(2 <= 2); // TRUE

//--- BOOLEAN ---
// if (1 == 1 && 1 > 5) {
//   console.log("true");
// } else {
//   // console.log("false");
// }

// if (1 == 1 || 1 > 5) {
//   // console.log("true");
// } else {
//   console.log("false");
// }

//--- TERNARY ---
// let x = 10;
// let y = 10;

// if (x == y) {
// console.log("Equal");
// } else {
//   console.log("Not Equal");
// }

// let result = x == y ? "Equal" : "Not Equal";
// console.log(result);

//--- LOOPS ---

//--- THE FOR LOOP ---

// let x = 0;
// for(x; x < 5; x++) {
//   console.log("The iteration number is " + x);
// };

// for (let x = 0; x <= 5; x++) {
//   for (let y = 0; y <= 5; y++) {
//     console.log("First loop: " + x + " - Iteration: " + y);
//   }
// };

// for (let i = 1; i <= 5; i++) {
//   if (i == 2) {
//     break; // will stop the loop at 2
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i == 2) {
//     continue; // prints out all but 2
//   }
//   console.log(i);
// }

// let users = ["James", "Brian", "Lucas"];
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

//--- WHILE LOOP ---

// let value = 2;
// while(value <= 5){
//   console.log(value);
//   value++;
// }

// let logged = true;
// let i = 0;

// while(logged){
//   if(i == 3){
//     logged = false;
//   }
//   console.log(i);
//   i++;
// }

//--- FUNCTIONS ---

// function firstFunction(){
//   console.log('My first function')
// }

// firstFunction()

// function logIn(){
//   logged = true;
//   console.log(logged);
//   console.log('welcome back!')
// }

//--- ARGUMENTS --- in functions ---
// function logIn(userName) {
//   alert("Welcome back " + userName);
// }

// logIn('Bams');

// function arg(arg1, arg2) {
//   console.log(arg1);
//   console.log(arg2);
// }

// arg('Hello ', 'there!');

//--- RETURNS --- in functions ---
 
// function calc(a,b){
//   var sum = a + b;
//   return sum;
// }
// var result = calc(5,5)
// var other = calc('Bambi ', 'Teague')

// console.log(result);
// console.log(other);
