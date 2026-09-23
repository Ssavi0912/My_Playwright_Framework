//concantenate
let str ="My name is "
console.log(`${str} ${"savita"} ${"and"} ${"Savi"}`);

//letter at index 8 of String
console.log(str[8]);


//uppercase//lowercase//trim
let atr ="  My name is  "
let upp=atr.toUpperCase();
console.log(upp);

let lww=atr.toLowerCase();
console.log(lww);

let tmm=atr.trim();
console.log(tmm);

//includes/start-with/ends-with//case senstive

let mtr ="This picture is perfect"
console.log(mtr.includes("Is"));
console.log(mtr.startsWith("this"));
console.log(mtr.endsWith("Perfect"));

//split//substring//slice

//split - convert string into array
let ktmr ="This picture-is-perfect-706911"
let uktmr=ktmr.split("-");
console.log(uktmr);
//from array select any word using index
console.log(uktmr[2]);

//substring -start index and end index will be -1
console.log(ktmr.substring(5,12));

//slice - start from 5
console.log(ktmr.slice(5))
//slice - start from 5 and end index will be -1
console.log(ktmr.slice(5,12))

//find the letter with index for String
let jtr="Everything is beautiful"
console.log(jtr[2]);

//slice - start from 5 and end index will be -1
let ujtr=jtr.split(" ")
console.log(ujtr);

//slice is array method so string need to be converted to array
console.log(ujtr.slice(0,-1))







