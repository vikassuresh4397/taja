import React from 'react'
import styled from "styled-components";
export const ProductCart = ({image,title,price,brand,discount,category}) => {
  // console.log(image,title,price,brand,discount,gender);
  
  return (
    <DIV>
  
      <img src={image} alt="image"></img>
        <h3>title:{title}</h3>
        <h3>Price: {price}</h3>
        <p>Brand: {brand}</p>
        <p>Discount: {discount}</p>
        <p>Category: {category}</p>
     
       
       
    </DIV>
  )
}

const DIV =styled.div`
border : 1px solid black;
padding: 20px;
width:400px;
img{
  width:100px;
}
`;

 