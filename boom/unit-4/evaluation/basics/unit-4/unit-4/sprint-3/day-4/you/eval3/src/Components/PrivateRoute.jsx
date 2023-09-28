  import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Loader from "./Loader";
function PrivateRoute({children}) {
  <Loader/>
const {isAuth}=useContext(AuthContext)
if(!isAuth){
    return <Navigate to="/login" />
}
    return children; 
}
export default PrivateRoute;
