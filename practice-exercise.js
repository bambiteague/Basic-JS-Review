/*
Expected output:
"Hello my name is FIRSTNAME LASTNAME and I am AGE years old. My skills are: SKILL1, SKILL2, and SKILL3. My parents are FATHER and MOTHER."
*/

let firstName = "Bams";
let lastName = "Teague";
let age = 30;
let skill = ["Javascript", "React", "Ruby on Rails"];
let parents = ["Malcom", "Terry"];

console.log(
  "Hello, my name is " +
    firstName +
    " " +
    lastName +
    " and I am " +
    age +
    " years old. My skills are: " +
    skill[0] +
    ", " +
    skill[1] +
    " and " +
    skill[2] +
    ". My parents are " +
    parents[0] +
    " and " +
    parents[1] +
    "."
);
