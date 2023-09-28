import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const auth=useSelector((store)=>store.authReducer.isAuth);
  const location =useLocation();
  
  // console.log("private router - location",location)
  return <div>{
    auth ? children:<Navigate state={location.pathname} to={"/login"} />
    }</div>;
};

