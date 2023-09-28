// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let arr= [1, 2, 3, 4, 5, 7];
let sum;
let isodd=function (el){
    
        return (el%2!=0);
      
}

let last=function (acc,el){
  return acc+el;
}
let x= arr.filter(isodd).reduce(last);
console.log(x);