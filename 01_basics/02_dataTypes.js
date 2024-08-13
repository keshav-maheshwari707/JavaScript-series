let fullName = "Keshav"; // string
let age = 19;            // number
let isStudent = true;    // boolean
let state;               // undefined
let nullValue = null;    // null (its type is object)
let fullName2 = ""       // string (not null)

console.table([typeof fullName, typeof age, typeof isStudent, typeof state, typeof nullValue, typeof fullName2]);

/*
Primitive data types are = string, number, boolean, undefined, null, bigInt, symbol.
Non-Primitive data type = object.
*/

// HOW TO ACCEPT USER INPUT ?

let username;
// username = window.prompt("enter username");
// console.log(username);

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `hello ${username}`;
} 