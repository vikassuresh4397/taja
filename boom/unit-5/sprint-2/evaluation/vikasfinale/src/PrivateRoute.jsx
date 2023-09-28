import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store)=>store.authReducer.isAuth)

  return !isAuth ? <Navigate to={"/login"} /> : children
};
