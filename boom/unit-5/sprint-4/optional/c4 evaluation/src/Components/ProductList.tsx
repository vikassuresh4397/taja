import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import { formDataType } from "../Pages/AddProduct";
import { ProductCard } from "./ProductCard";

const ProductList = () => {

  const [products,setProducts] =useState<formDataType[]>([]);
  const [change,setChange] = useState<boolean>(false);

  const handleChange=()=>{
    setChange((prev:boolean)=>{
      return !prev;
    });
  }
 
  useEffect(()=>{
    getProducts().then((res:formDataType[]) => {
      console.log("res",res)
      setProducts(res)});
  },[change]);

  return (
    <div className={`product-list`}>
      {/* Add all product cards here in grid format  */}
      {
        products.map((el)=>{
          return <ProductCard key={el.id} {...el} handleChange={handleChange}></ProductCard>
        })
      }
    </div>
  );
};

export default ProductList;
