import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import { useLocation } from "react-router-dom";
import { getProducts } from "../api";
import { formDataType } from "./AddProduct";

export const HomePage = () => {


// console.log("data",data);

  return (
    <div>
      <Navbar />
      <ProductList  />
    </div>
  );
};
