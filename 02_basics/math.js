// let x = 3.51;
// let y = 3.99;
// let z;
// let u;
// z = Math.round(x);
// console.log(z);
// u = Math.floor(y);
// console.log(u);

// RANDOM NUMBER GENERATOR

// let randomNum = Math.random();   // this will generate a random number between 0 and 1.
// const max = 100;
// const min = 50;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;  

// this will generate a random number between 50 and 100.

// console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}