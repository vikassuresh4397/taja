import {legacy_createStore} from "redux";
import { reducer } from "./reducer";
const initialState={
    counter:0,
    todo:[],
    isLoading:false,
    isError:false,
}

export const store= legacy_createStore(reducer,initialState);

// export default {store};