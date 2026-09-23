// We are creating a variable named num1 and storing the number 20 in it.
// "let" means the value of this variable can be changed later.
let num1=20;

// We are creating another variable named num2 and storing the number 50 in it.
let num2=50;

// We are adding num1 and num2 and storing the result in a new variable called num3.
// Since both num1 and num2 are numbers, the + operator here does mathematical addition.
let num3=num1+num2;

// This line is commented out, so it will not run.
// It shows an older way of joining text and variables together using the + operator (string concatenation).
//console.log(num1 +" and "+num2+ " The Sum is "+num3);

// This is called a template literal (notice the backticks ` ` instead of normal quotes).
// Inside ${ } we can directly place a variable name and JavaScript replaces it with its value.
// This prints all three variables together inside one readable sentence.
console.log(`${num1} and ${num2} and the final sum is ${num3}`);
