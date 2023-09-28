import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { deleteProduct, getProducts } from '../redux/productReducer/action';

export const ProductCart = ({id,name,image,price,brand,category,gender}) => {

const dispatch =useDispatch();

  const handledelete = () =>{
dispatch(deleteProduct(id)).then((res)=>{
  dispatch(getProducts({}))
})
  }


  return (
    <DIV>
      <img src={image} alt="none" />
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Gender: {gender}</p>
      <button>Edit</button>
      <button onClick={handledelete}>Delete</button>
    </DIV>
  )
}

const DIV= styled.div`
border:1px solid gray;
padding :10px;
  img{
    width: 100%;
  }
`


