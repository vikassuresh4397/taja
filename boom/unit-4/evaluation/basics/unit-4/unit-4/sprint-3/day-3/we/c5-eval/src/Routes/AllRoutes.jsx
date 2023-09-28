import Home from "./Home"
import Login from "./Login"
import Dashboard from "./Dashboard";
import {Routes,Route} from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoute";
function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
  </Routes>
  </div>;
}

export default AllRoutes;
