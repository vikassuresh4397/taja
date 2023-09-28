//Complete the reducer function logic inside the curly braces {}
import {ADD,REDUCE} from "./actionTypes";
const reducer = (state,{type,payload}) => {
    console.log("reducer",state);
    
   switch(type){
    case ADD: 
    return{
        ...state,counter:state.counter+payload
    }
    case REDUCE: 
    return{
        ...state,counter:state.counter-payload
    }
    default: return state
   }
   
};

export { reducer };



// case ADD:
//     return {
//       ...state,
//       counter: state.counter + payload
//     };
//   case REDUCE:
//     return {
//       ...state,
//       counter: state.counter - payload
//     };