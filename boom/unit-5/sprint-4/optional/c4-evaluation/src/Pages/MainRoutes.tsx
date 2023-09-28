import React from "react";
import { Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import {AddBook} from "./AddBook"
export const MainRoutes = () => {
  return <Routes>
     <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/add-product" element={<AddBook></AddBook>}></Route>
  </Routes>;
};
