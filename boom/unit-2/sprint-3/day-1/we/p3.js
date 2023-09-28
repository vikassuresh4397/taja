// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]

let arr=[1,2,3,4,5,6,7];
let x= arr.filter(function (el){
    if(el%2!=0){
        let y=el;
       return y;
    }
   
})
console.log(x);
