import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionType";

const reducer = (state, {type,payload}) =>{

    switch(type){
        case GET_TODO_REQUEST : return {
            ...state,isloading:true,
        }
         case GET_TODO_SUCCESS : return {
            ...state,isloading:false,todos:payload,
        }
         case GET_TODO_FAILURE : return {
            ...state,isError:true,isloading:false,
        }

        case POST_TODO_REQUEST : return {
            ...state,isloading:true,
        }
         case POST_TODO_SUCCESS : return {
            ...state,isloading:false,todos:[...state.todos,payload]
        }
         case POST_TODO_FAILURE : return {
            ...state,isError:true,isloading:false,
        }
        default:return state
    }
}

export default reducer;