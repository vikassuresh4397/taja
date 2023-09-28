import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import { useLocation } from "react-router-dom";
import { getProducts } from "../api";
import { formDataType } from "./AddProduct";

export const HomePage = () => {
const [data,setData]=useState<formDataType[]>([]);
useEffect(()=>{
  getProducts().then(res=>setData(res));
},[data])

// console.log("data",data);

  return (
    <div>
      <Navbar />
      <ProductList data={data} setData={setData} />
    </div>
  );
};
