//DO NOT change the function names

//function to return the add action object
import { ADD,REDUCE } from "./actionTypes";
const handleAddActionObj = () => {
    console.log("yes");
    return {type:ADD,payload:1}
};

//function to return the reduce action object
const handleReduceActionObj = () => {
    return {type:REDUCE,payload:1}
};

export { handleAddActionObj, handleReduceActionObj };
