import { Route, Routes } from "react-router-dom";
import {Login} from "./Login"
export const MainRoutes = () => {
  return <Routes>
    <Route path="/login" element={<Login></Login>}></Route>
  </Routes>;
};
