import React from "react";
import { Route, Routes } from "react-router-dom";
import {Homepage} from "./Homepage";
import { Login } from "./Login";
import { EditBook } from "./EditBook";
import { PrivateRoute } from "../Components/PrivateRoute";
export const MainRoutes = () => {
  return <Routes>{/* Provide all Routes here */}
  
   <Route path="/" element={<PrivateRoute><Homepage></Homepage></PrivateRoute>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/edit-book/:id" element={<PrivateRoute><EditBook></EditBook></PrivateRoute>}></Route>
    <Route path="*" element={<h3>404 page not found</h3>} />
  </Routes>;
};
