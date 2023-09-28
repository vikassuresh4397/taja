import React, { useEffect, useRef } from "react";

export const Ref = ()=>{
const ref = useRef(1);
console.log(ref);
// const addHAndler = () =>{
//     ref.current++;
//     console.log(ref) 
// }

useEffect(()=>{
console.log(ref.current);
ref.current.focus()

})
return (<>
   <input type="text" ref={ref}></input>
</>);
}