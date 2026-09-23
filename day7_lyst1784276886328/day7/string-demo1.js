// We are creating a variable named tool and storing the text "Playwright" in it.
let tool="Playwright";

// We are creating a variable named statement with a longer sentence stored inside it.
let statement="Playwright is free and backed by Microsoft and used for web and api"

// Since strings behave like a list of characters, tool[1] gives us the character at index 1.
// "Playwright" -> P(0) l(1) a(2) y(3) ... so this prints "l".
console.log(tool[1]);

// startsWith() checks if the string begins with the given text and returns true or false.
// Here we are checking if statement starts with "Selenium", which it does not, so this will be false.
let result=statement.startsWith("Selenium")

// This prints the result of the startsWith check above, which is false.
console.log(result);

// endsWith() checks if the string finishes with the given text and returns true or false.
// statement ends with "api", so this prints true.
console.log(statement.endsWith("api"));

// includes() checks if the given text is present anywhere inside the string and returns true or false.
// statement does contain the word "Microsoft", so this prints true.
console.log(statement.includes("Microsoft"));
