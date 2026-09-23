// We are creating a variable named fname and storing the text "Nitin" in it.
// Text values in JavaScript are called strings, and they are written inside quotes.
let fname="Nitin"

// This line is commented out, so it will not run.
// If it did run, it would print the character at index 0 of fname.
// Strings work like a list of characters, and the first character is always at index 0.
//console.log(fname[0]);

// We are creating a variable named str1 and storing the text "JavaScript" in it.
let str1="JavaScript";

// substring(0,4) takes a piece of the string starting from index 0 up to (but not including) index 4.
// So it picks characters at index 0, 1, 2 and 3, which gives us "Java".
console.log(str1.substring(0,4)); // 0 1 2 3

// This prints the original str1 value, showing that substring() did not change the original string.
console.log(str1);
