import React from "react";
import { formDataType } from "../Pages/AddProduct";
import { deleteProduct, updateDisLike, updateLike } from "../api";


type formDataType1={
  name: string,
  brand: string,
  price: number,
  image: string,
  like: number,
  dislike: number,
  id?:number,
  handleChange:()=>void,
}

export const ProductCard = ({name,brand,price,image,id,like,dislike,handleChange}:formDataType1) => {

const handlelike = (id?:number)=>{
  updateLike(like,id).then((res)=>{
    handleChange();
  })
}

const handledislike = (id?:number)=>{
  updateDisLike(like,id).then((res)=>{
    handleChange();
  })
}

const handledelete = (id?:number)=>{
  deleteProduct(id).then((res)=>{
    handleChange();
  })
}

  return (
    <div className={`product-card`}>
      {/* Add all elements of product card here */}

      <img src={image} alt="" className="product-image"/>
      <h3 className="product-name">{name}</h3>
      <h2 className="product-price">{price}</h2>
      <h2 className="product-brand">{brand}</h2>
      <button data-testid="like-button" onClick={()=>handlelike(id)}>LIKE</button>
      <h2 className="product-like">{like}</h2>
      <button className="data-testid=dislike-button" onClick={()=>handledislike(id)} >DISLIKE</button>
      <h2 className="product-dislike">{dislike}</h2>
     <button className="data-testid=delete-button" onClick={()=>handledelete(id)} >DELETE</button>
    </div>
  );
};


// 1. Image with class `product-image`
// 2. Name with class `product-name`
// 3. Price with class `product-price`
// 4. Brand with class `product-brand`
// 5. Like button with `data-testid=like-button`
// 6. Like count with class `product-like`
// 7. Dislike button with `data-testid=dislike-button`
// 8. Dislike count with class `product-dislike`
// 9. Delete button with `data-testid=delete-button`

// "name": "Sport Shoe",
// "brand": "Nike",
// "price": 3000,
// "image": "https://contents.mediadecathlon.com/p2175064/a323df0c88381a47cf8c79a3a38aeb5f/p2175064.jpg?format=auto&quality=70&f=650x0",
// "id": 1,
// "like": 6,
// "dislike": 4