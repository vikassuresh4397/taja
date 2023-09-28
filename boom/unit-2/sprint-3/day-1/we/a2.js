// ARRAY STRING FIRST CHARACTER - HOF
// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

let arr=["Masai", "School"];
let firstletter=function (el,i=0){
  i=0;
  return el[i];
}
let x=arr.map(firstletter);
console.log(x);