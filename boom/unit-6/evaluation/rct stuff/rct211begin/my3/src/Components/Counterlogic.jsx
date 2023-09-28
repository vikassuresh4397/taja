import React, { useState } from "react";

export const useCounterlogic = (initialvalue,payload) =>{
   const [state,setState]=useState(initialvalue);
  
   let fun = ()=>{
    setState((prev)=>prev+payload)
   };
   return [state,fun];
}