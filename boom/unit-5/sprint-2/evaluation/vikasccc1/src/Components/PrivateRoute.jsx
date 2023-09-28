import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const authhai=useSelector((store)=>{
    return store.authReducer.isAuth
  })


  return !authhai?<Navigate to={"/login"}></Navigate>:children
  
  
};
