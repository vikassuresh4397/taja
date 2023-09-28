import Login from "./Login"
import {Routes,Route} from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoute";
import Home from "./Home"

import Dashboard from "./Dashboard";



function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<PrivateRoute>{<Dashboard/>}
    </PrivateRoute>} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </div>;
}

export default AllRoutes;
