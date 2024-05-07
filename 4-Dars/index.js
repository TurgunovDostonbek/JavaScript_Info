// Logical Operation, If else

// Operator	Syntax	Description
// && (Logical AND)	expression1 && expression2	true only if both expression1 and expression2 are true
// || (Logical OR)	expression1 || expression2	true if either expression1 or expression2 is true
// ! (Logical NOT)	!expression	false if expression is true and vice versa
// Example 4: Logical Operators in JavaScript
let x = 3;

// logical AND
console.log((x < 5) && (x > 0));  // true
console.log((x < 5) && (x > 6));  // false

// logical OR
console.log((x > 2) || (x > 5));  // true
console.log((x > 3) || (x < 0));  // false

// logical NOT
console.log(!(x == 3));  // false
console.log(!(x < 2));  // true



// If else


let score = 45;

// check if score is fifty or greater
if (score >= 50) {
    console.log("You passed the examination.");
}
else {
    console.log("You failed the examination.");
}


if (condition) {
    // block of code
}


// Program to check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("positive number");
}

console.log("nice number");


if (condition) {
    // block of code
    // execute this if condition is true
}
else {
    // block of code
    // execute this if condition is false
}

let age = 17;

// if age is 18 or above, you are an adult
// otherwise, you are a minor

if (age >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}
