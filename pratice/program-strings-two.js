//slice
let str="The tshirt price is 200";
console.log(str.slice(11,16)); //it will slice from 11 and print till 15 i.e price

//split convert string to array
let upstr=str.split(" ");
console.log(upstr);

//after converting to array
console.log(upstr[3])

//String to Array
let msg="Your order id is order-76n6q";
console.log(msg.split("-"));
//print the first item as index is 0
console.log(msg.split("-")[0]);




