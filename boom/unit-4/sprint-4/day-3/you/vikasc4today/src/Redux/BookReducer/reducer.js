
import { BOOK_REQUEST_FAILURE, BOOK_REQUEST_PENDING, BOOK_REQUEST_SUCCESS, EDIT_REQUEST_SUCCESS } from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  books: [],
}

export const reducer =  (state = initialState, { type, payload }) => {
switch (type) {
    case  BOOK_REQUEST_PENDING:
        return {...state,isLoading:true}
      case BOOK_REQUEST_FAILURE:
        return {...state,isError:true,isLoading:false}
      case BOOK_REQUEST_SUCCESS:
        return {...state,isLoading:false,books:payload}   
        case EDIT_REQUEST_SUCCESS:
          return {...state,isLoading:false}  
      default:
        return state
}
}



