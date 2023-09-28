import React, { useReducer } from "react"

let initalValue = {
    count:0,
}

let reducer = (state,action)=>{
switch(action.type){
    case "INC": return{
        count:state.count+action.payload,  
    }
    case "DEC": return{
        count:state.count+action.payload,  
    }
    default:return ("err")
}
}


export const Counter1 = ()=>{
    const [boom,dispatch]=useReducer(reducer,initalValue)
   return(<>
    <h1>count:{boom.count}</h1>
    <button onClick={()=>dispatch({type:"INC",payload:1})}>+</button>
    <button onClick={()=>dispatch({type:"DEC",payload:-1})}>-</button>
   </>)
}