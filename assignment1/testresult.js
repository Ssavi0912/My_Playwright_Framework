//Tried with responseCode 200,404,500,401,302
let responseCode = 301;

if(responseCode == 200)
{
console.log("Test Passed");

}
else if(responseCode == 404)
{
console.log("Page Not Found");

}
else if(responseCode == 500)
{
console.log("Server Error");
}
else
{
console.log("Unknown Status");
}