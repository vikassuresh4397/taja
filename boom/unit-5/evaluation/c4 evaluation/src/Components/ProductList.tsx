import React, { useEffect, useState } from "react";
import { deleteProduct, getProducts, updateDisLike, updateLike } from "../api";
import { formDataType } from "../Pages/AddProduct";
import { ProductCard } from "./ProductCard";


interface PropsType{
  data:formDataType[],
  setData: React.Dispatch<React.SetStateAction<formDataType[]>>
}

const ProductList = ({data,setData}:PropsType) => {


const handleDelete=(id:number)=>{
  deleteProduct(id).then(()=>{
    const fData=data?.filter((el)=>id!==el.id)
    setData(fData);
  })
}

const handleLike = (id: number) => {
  updateLike(id).then(() => {
    const mData = data?.filter((el) => {
      return id === el.id ? { ...el, like: el.like + 1 } : el;
    });
    setData(mData);
  });
};

const handleDislike = (id: number) => {
  updateDisLike(id).then(() => {
    const mData = data?.filter((el) => {
      return id === el.id ? { ...el, dislike: el.dislike + 1 } : el;
    });
    setData(mData);
  });
};
 
 
  useEffect(()=>{
    getProducts().then((res:formDataType[]) => {
      console.log("res",res)
      setData(res)});
  },[]);

  return (
    <div className={`product-list`}>
      {/* Add all product cards here in grid format  */}
      {
        data.map((el)=>{
          return <ProductCard key={el.id} {...el} handlelike={handleLike} handledelete={handleDelete} handledislike={handleDislike}></ProductCard>
        })
      }
    </div>
  );
};

export default ProductList;
