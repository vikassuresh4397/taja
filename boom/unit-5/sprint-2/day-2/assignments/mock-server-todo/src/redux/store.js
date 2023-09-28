import reducer from "./reducer";
// import legacy_createStore from "redux";
import { legacy_createStore } from 'redux';

export const initalState ={
    todos:[],
    isLoading:false,
    isError:false,
};
export const store =legacy_createStore(reducer,initalState);