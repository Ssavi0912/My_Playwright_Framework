// We are creating a variable named str1 and storing the text "TypeScript" in it.
let str1="TypeScript";

// We are creating another variable named str2 with the exact same text "TypeScript".
let str2="TypeScript";

// The === operator checks both value and type equality without converting either side.
// Since str1 and str2 hold the exact same text, this comparison is true.
if(str1===str2)
{
    // This block runs because the condition above is true.
    console.log("Matched");
}
else
{
    // This block would run only if the condition above was false.
    console.log("Mismatched");

}
