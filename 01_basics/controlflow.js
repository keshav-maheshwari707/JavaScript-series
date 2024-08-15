// if
const temp = 70;
if (temp < 50) {
    console.log("below 50");
}
else {
    console.log("above 50");
}

const score = 100;
if (score > 50) {
    const power = "swim";
    console.log(`power is ${power}`);
}
// console.log(`your power is ${power}`);

const balance = 100;
if (balance > 1000) {
    console.log("more than 1000");
}
else if (balance < 1000) {
    console.log("less than 1000");
}
else if (balance == 1000) {
    console.log("equal to 1000");
}