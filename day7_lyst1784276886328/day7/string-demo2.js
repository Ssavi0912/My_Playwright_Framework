// We are creating a variable named str1 and storing the text "Playwright Automation" in it.
let str1="Playwright Automation";

// We are creating a variable named str3 with extra spaces before and after the text on purpose,
// so that we can later demonstrate how trim() removes those extra spaces.
let str3=" JS and TS ";

// toUpperCase() creates a brand new string with all letters in uppercase.
// It does not change str1 itself, it only returns a new string which we store in str2.
let str2=str1.toUpperCase(); // create a new string original string will remain same

// This prints the original str1, still in its original case, proving it was not modified.
console.log(str1);

// This prints str2, which is the uppercase version we created above.
console.log(str2);

// toLowerCase() also creates a new string, this time converted to all lowercase letters.
// We are not storing it in a variable here, so it is only printed and then discarded.
console.log(str1.toLowerCase());

// This prints str1 again to confirm it is still unchanged after calling toLowerCase() on it.
console.log(str1);

// trim() removes extra whitespace from both the start and the end of a string (not the middle).
// So " JS and TS " becomes "JS and TS" without the leading and trailing spaces.
console.log(str3.trim()); //trimstart and trimend
