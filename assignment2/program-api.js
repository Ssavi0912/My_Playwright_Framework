let str="regression,smoke,api,sanity"

//converted to array and print the same
let upstr=str.split(",")
console.log(upstr);

let target ="smoke"

let found=false;

for (let tag of upstr) 
{
    if(tag==target)
    {
        found =true
        break;   
    }
}
if(found)
{
console.log("Smoke test will be executed");

}    
else
{
console.log("Performance tests found");

}    