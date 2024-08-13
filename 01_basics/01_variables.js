const accountId = 123;
// accountId = 456;     // Not allowed.
console.log(accountId); // It will throw an error because accountId is a constant.

let accountEmail = "keshav@google.com";
accountEmail = "myemail@google.com";

var accountPassword = "1212";
accountPassword = "1414";

accountCity = "delhi";
accountCity = "bengaluru";

let accountState;
// If we don't assign a value to a variable in JS then its value will automatically be undefined.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
We should use const for declaring constants,
and let for declaring variables.
We should not use var for declaring variables.
*/

let x;
x = 100;

console.log(x);

let y = 101;
console.log(y);

let age = 19;
let price = 20.45;
let gpa = 9.8;

console.log(`you are ${age} years old and the price of the pen is ${price} and your gpa is ${gpa}`);
console.table([typeof age, typeof price, typeof gpa]);

let name1 = "thor";
console.log(typeof name1);
console.log(name1);

let online = true;
console.log(typeof online);
console.log(`is my friend online: ${online}`);

let fullName = "ironman";
let age2 = 20;
let isAvenger = true;

document.getElementById("p1").textContent = `your name is ${fullName}`;
document.getElementById("p2").textContent = `you are ${age2} years old`;
document.getElementById("p3").textContent = `are you an avenger: ${isAvenger}`;