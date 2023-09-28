// Given an array of numbers .
// Given find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

let arr=[1, 2, 3, 4, 5, 6];


let divi= function (el){
  if(el%3==0){
    return el;
  }
}

let cube= function(el){
   return (el**3); 
}
let sum=function(acc,el){
  return acc+el;
}
let x=arr.filter(divi).map(cube).reduce(sum);
console.log(x);