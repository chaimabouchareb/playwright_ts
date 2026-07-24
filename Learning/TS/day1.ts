//number
//let age:number= 30;
//console.log(age);
//string
let Name:string="chaima";
/* display the variable in the stream */
console.log(`hello ${Name}`);
// NULL & UNDEFINED --> absence of value
let emptyValue:null=null;
console.log(emptyValue);
let undefinedValue:undefined=undefined;
console.log(undefinedValue);

//functions
/*
function show():void
{
   console.log("welcome");
}
show();
*/
function sum(x:number, y:number):number
{
    return(x+y);
}
let total:number= sum(10,9);
console.log(total);
//=== compare the value and the type of the variable string, number..
console.log("===loops===");
/*let i:number=1;
while(i<=5)
{
    console.log(i);
    i++;
}
*/
for(let i=1;i<=10;i++)
{
    if(i==3)
    {
        break;
    }
    if(i==4)
    {
        continue;
    }
    console.log(i);
}