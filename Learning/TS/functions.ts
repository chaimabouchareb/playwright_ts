/*
function functionName(parameter):returnType
{
block of code
}
functionName();
*/
/*
console.log("******example1******");
function addNumbers(x:number, y:number):number
{
    sum = x+y;
    return sum;
}
console.log(addNumbers(10,5));
*/
//Example with rest parameters
//rest parameters don't restrict the number of values that we can pass to a function
/*
function addNumbers2(...x:number[]):number
{
    let i;
    let sum:number = 0;
    for(i=0;i<x.length;i++)
    {
        sum=sum+x[i];
    }
    console.log("sum of the numbers",sum);
}
addNumbers2(1,5,8);
*/

//example with rest parameters and multiple types
function findElements(...elements:(number|string)[]):number
{
    return elements.length;

}

console.log(findElements(3,"chaima",2,5));

