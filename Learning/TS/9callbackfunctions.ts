
//example 1
/*
function greet(name:string,callback:(message:string)=>void){
    console.log(name);
    callback(`hello ${name}`);
}

//callback function
function showMessage(message:string){
    console.log(message);
}
greet("chaima",showMessage);
*/

console.log("================= function overloading =================");

/*
step1: write a signature of functions
step2: implement a function
step3: calling function
*/
/*
//example 1: different paramter types(data types)
function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param: number|string):string{
    if(typeof(param)==="number"){
        return(`User ID is ${param}`);
    }
    else{
        return(`User name is ${param}`);
    }
}
console.log(getInfo(65665));
console.log(getInfo("chaima"));
*/
/*
//example 2: different number of parameters
console.log("step1: write a signature of functions");
function add(a:number, b:number):number;
function add(a:number, b:number, c:number):number;

console.log("step2: implement a function");
function add(a:number, b:number, c?:number):number{
    if(c!==undefined){
        return a+b+c;
    }
    else{
        return a+b;
    }
}

console.log("step3: calling function");
console.log(add(10,9));
console.log(add(1,2,3));
*/

//example3: different return types
console.log("step1: write a signature of functions");
function processInput(str:string):string;
function processInput(num:number):number;

console.log("step2: implement a function");
function processInput(input:number|string):(number|string){
    if(typeof(input)==="string"){
        return input.toUpperCase();
    }
    else{
        return input*2;
    }
}



console.log("step3: calling function");

console.log(processInput("Welcome"));
console.log(29);
console.log("=========================================================");