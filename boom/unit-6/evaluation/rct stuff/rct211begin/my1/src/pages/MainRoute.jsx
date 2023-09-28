import React from "react";
import {Route, Routes} from "react-router-dom";
import { AddProducts } from "./AddProducts";
import { ShowProduct } from "./ShowProduct";
import { HomePage } from "./HomePage";
import { Auth } from "../Components/Auth";

export const MainRoute= () =>{
    return(
        <Routes>
            <Route path="*" element={<h1>404 Errror</h1>}></Route>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/add" element={<AddProducts></AddProducts>}></Route>
            <Route path="/show" element={<Auth>
                <ShowProduct></ShowProduct>
            </Auth>}></Route>
          
        </Routes>
    )
}


