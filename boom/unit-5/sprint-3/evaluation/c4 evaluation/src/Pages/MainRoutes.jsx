import { Route, Routes } from "react-router-dom";
import {Homepage} from "./Homepage";
import { Login } from "./Login";
import { StudentDetail } from "./StudentDetail";
import { PrivateRoute } from "../Components/PrivateRoute";
export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/student/:id" element={<PrivateRoute><StudentDetail></StudentDetail></PrivateRoute>}></Route>
    <Route path="*" element={<h3>404 page not found</h3>} />
  </Routes>;
};
