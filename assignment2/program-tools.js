let tools=["Selenium","Playwright","Cypress","WebDriverIO"]

let target ="Playwright"
let found=false;
for (let num of tools) 
{
    if(num === target)
{
    found=true;
    break;   
}
}
if(found)
{
    console.log("Playwright is supported");   
}
else
{
console.log("Playwright not found in supported tools");

}    