// This the function
// Create a function `getName`
// - it should accept firstname and lastname
// - it should return fullname
// ```
// if I pass Nrupul and Dev as Params it should return Nrupul Dev. There should be space in between first and last name in the returned string.
// ```
const getName = (firstname:string,lastname?:string):string=>{
    return (firstname+" "+lastname);
}

getName("Nrupul","Dev")

// console.log(getName("Nrupul","Dev"));

export default getName;// Make no changes here