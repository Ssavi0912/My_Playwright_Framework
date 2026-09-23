// We are creating a variable named str1 and storing the text "Playwright Test Runner" in it.
let str1="Playwright Test Runner";

// Here we are chaining multiple string methods together, one after another, on str1.
// Step 1: toUpperCase() converts the whole string to uppercase -> "PLAYWRIGHT TEST RUNNER"
// Step 2: toLowerCase() then converts that uppercase string back to lowercase -> "playwright test runner"
// Step 3: split(" ") breaks the string into an array of words wherever there is a space.
//         This gives us ["playwright", "test", "runner"]
// Step 4: [1] picks the item at index 1 from that array, which is "test"
let result=str1.toUpperCase().toLowerCase().split(" ")[1];

// This prints the original str1 value. Notice it is still unchanged,
// because string methods always return a new value instead of modifying the original string.
console.log(str1);

// This prints the final result, which is the word "test".
console.log(result);
