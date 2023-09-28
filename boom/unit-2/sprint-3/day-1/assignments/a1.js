// ARRAY STRING LENGTH - HOF
// Given an array of strings print the length of each string

// example : ["apple", "windows", "ubuntu"]

let arr= ["apple", "windows", "ubuntu"];
let str=function(el){
    return el;
}
let x=arr.map(str);
console.log(x);