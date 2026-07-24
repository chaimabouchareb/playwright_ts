

//approach1:
let names:number[]=[];
for(let i=0;i<5;i++){
    names[i]=i+2;
    //console.log(names);
}
console.log(names);

//approach2:
let empNames:Array<string|number>=["john","smith","peter","scortt",911];
console.log(empNames);

let mixedData:Array<any>=["john","smith",911,true,null];
let empIds:Array<Number>=[10,15,80,10];
console.log("=== iterating over an array using a traditional for loop ===");
for(let i=0;i<mixedData.length;i++){
    console.log(mixedData[i]);
}

console.log("=== iterating using the 'for..in ' loop(indexes) ===");
for(let i in mixedData){
    console.log(mixedData[i]);
}

console.log("=== iterating using the 'for..of ' loop(values) ===");
for(let value of mixedData){
    console.log(value);
}

console.log("passing an array to the function");
function searchArr(element:number,table:number[]):boolean{
    for(let i=0;i<table.length;i++){
        if(table[i]===element){
            return true;
        }
    }
    return false;

}

let table:number[]=[10,55,5,29];
let value = 15;
console.log(searchArr(value,table));

console.log("a function takes an array and returns an array");
function capitalize(table:string[]):string[]{
    let resArr:string[]=[];
    for(let i=0;i<table.length;i++){
        resArr[i]=table[i].toUpperCase();

    }
    return(resArr);

}

let words:string[]=["chai","hey","hAa"];
console.log(capitalize(words));


/*

const numbers1: number[] = [5, 2, 9, 1, 5, 6];

function sortAscending(arr: number[]): number[] {
  return arr.slice().sort((a, b) => a - b);
}

const sortedNumbers = sortAscending(numbers1);
console.log('Original:', numbers1);
console.log('Sorted ascending:', sortedNumbers);



const numbers2: number[] = [5, 2, 9, 1, 7];

const sortedDescending = numbers2.sort((a, b) => b - a);

console.log(sortedDescending);

*/