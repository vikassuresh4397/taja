import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const authhai1=useSelector((store)=>store.authReducer.isAuth);

  return <>{/* Complete this higher order component  */}
  {
    !authhai1?<Navigate to={"/login"}></Navigate>:children
  }
   
  
  
  </>;
};
