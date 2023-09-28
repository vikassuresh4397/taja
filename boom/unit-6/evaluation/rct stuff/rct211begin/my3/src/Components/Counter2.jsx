// import React, { useState } from "react";
import { useCounterlogic } from "./Counterlogic";


export const Counter2 = ()=>{
    const [state,fun] = useCounterlogic(0,5);
    return(
        <>
<div>Counter:{state}</div>
<button onClick={fun}>CLick me</button>
        </>
    )
}