import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
}

export const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {
  case PRODUCT_REQUEST:
    return {...state,isLoading:true}
  case PRODUCT_FAILURE:
    return {...state,isError:true,isLoading:false}
  case POST_PRODUCT_SUCCESS:
    return {...state,isLoading:false}
  case GET_PRODUCT_SUCCESS:
    return {...state,isLoading:false,products:payload}   
  default:
    return state
  }
}
