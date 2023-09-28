// export const ADD = "ADD";
// export const RED = "RED";

import { ADD,RED } from "./actionType"

export const addAction = ()=>{
    return {type:ADD,payload:1}
}

export const redAction = ()=>{
    return {type:RED,payload:-1}
}