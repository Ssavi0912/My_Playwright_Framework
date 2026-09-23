// We are creating a variable named str and storing the text "The price is 200" in it.
let str="The price is 200";

// slice(12,16) takes a piece of the string starting at index 12 up to (but not including) index 16.
// Counting characters from 0, index 12 to 15 covers the digits "200" along with a trailing character
// depending on exact spacing, giving us that portion of the string.
console.log(str.slice(12,16));

// slice(-3) counts from the end of the string instead of the start.
// -1 is the last character, -2 is second last, and so on, so -3 grabs the last three characters, "200".
console.log(str.slice(-3));

// split(" ") breaks the string into an array of words wherever there is a space.
// "The price is 200" becomes ["The", "price", "is", "200"].
let arr=str.split(" ")

// This prints the item at index 3 of the array, which is "200".
console.log(arr[3]);
