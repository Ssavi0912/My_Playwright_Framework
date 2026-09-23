// We are creating a variable named msg and storing an order confirmation sentence in it.
let msg="Your order id is order-76n6q";

// split("-") breaks the string into an array wherever a "-" character appears.
// "Your order id is order-76n6q" becomes ["Your order id is order", "76n6q"].
// [0] then picks the first item from that array, which is "Your order id is order".
console.log(msg.split("-")[0])
