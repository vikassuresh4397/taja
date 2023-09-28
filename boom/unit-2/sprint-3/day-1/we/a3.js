// ARRAY STRING PATTERN- HOF
// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let arr=["assignment", "problem", "media", "upload"];
let sep=function(el){
   if(el[0]=="a"||el[el.length-1]=="a"){
     return el;
   }
  } 


let x=arr.filter(sep);
console.log(x);