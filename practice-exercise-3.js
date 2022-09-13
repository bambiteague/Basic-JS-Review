/*
Given an array of two users, an array of prices, and an array of products --> use a For Loop to iterate through the arrays and output the items bought by each person. 

NOTE: Raymond is a preferred customer and gets a discount of $3 on his purchases. 
*/

let user = ["Raymond", "George"];
let price = [20, 12, 5];
let products = ["potatoes", "apples", "lemmons"];

for (let i = 0; i < user.length; i++) {
  if (user[i] === "Raymond") {
    console.log(user[i] + " bought:");
    for (let x = 0; x < products.length; x++) {
      console.log("- " + products[x] + " = $" + (price[x] - 3));
    }
  } else {
    console.log(user[i] + " bought:");
    for (let x = 0; x < products.length; x++) {
      console.log("- " + products[x] + " = $" + price[x]);
    }
  }
}
