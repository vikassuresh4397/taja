// ARRAY ODD LENGTH STRINGS SUM- HOF
// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8

let arr=["A", "Good", "Problem"];
let len=function (el){
  if(el.length%2!=0){
    return el;
  }
}

let sep=function (acc,el){
  return (acc.length+el.length)
}
let x=arr.filter(len).reduce(sep);
console.log(x);