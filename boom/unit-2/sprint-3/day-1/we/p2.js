// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

let arr=[1,2,3,4];
let x=arr.map(function(el){
    let y= el**2;
    return y;
})

console.log(x);