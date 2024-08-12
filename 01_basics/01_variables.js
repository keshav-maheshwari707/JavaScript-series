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