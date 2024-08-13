let score = 200;
console.log(typeof score);   // number

let score2 = "200";
console.log(typeof score2);  // string

let valueInNumber = Number(score2);
console.log(typeof valueInNumber);

/*
NOTE = THESE ALL WILL BE THE VALUES WHEN WE CONVERT THEM INTO A NUMBER BUT SABKA TYPE NUMBER RAHEGA!
"33" => 33
"33abc" => NaN (Not a Number)    
true => 1
false => 0
null => 0
undefined => NaN
*/

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // Output => true for 1 & false for 0.
console.log(typeof booleanIsLoggedIn);  // Boolean.

/*
NOTE = THESE ALL WILL BE THE VALUES WHEN WE CONVERT THEM INTO BOOLEAN BUT TYPE SABKA BOOLEAN HO JAYEGA!
1 => true
0 => false
"" => false
"abc" => true
*/

// *************** OPERATIONS ***************

/*
console.log(15 + 10);
console.log(15 - 10);
console.log(15 * 10);
console.log(15 / 10);
console.log(15 % 10);
console.log(15 ** 10);
*/

let str1 = "my name is";
let str2 = " keshav";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);      // 12
console.log(1 + "2");      // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32


let students = 10;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;   returns quotient
// students = students ** 2;
// students = students % 2;   returns remainder

// students += 2;       These are called augumented assignment operators.
// students -= 2;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;         Increment & Decrement operators.       
// students--;         

console.log(students);

/*
OPERATOR PRECEDENCE-
paranthesis
exponents
multiplication, division & modulus
addition & subtraction
*/

let result = 12 % 5 + 8 / 2;
console.log(result);