import React, { useState } from 'react'
import styled from 'styled-components';
import { addProduct } from '../redux/productReducer/action';
import { useDispatch, useSelector } from "react-redux";

const initialState = {
    image:"",
    title:"",
    price:"",
    brand:"",
    discount:"",
    category:"",
}   
export const Admin = () => {
    const [product,setProduct] = useState(initialState);
    const dispatch= useDispatch();

const handleChange = (e) => {
   
    const {name,value} = e.target;
    
    setProduct((prev)=>{
        return {...prev,[name]:value}
    })
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product))
    setProduct(initialState)
}


  return (
    <DIV>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
        <input name="image" type="text" value={product.image} placeholder='image' onChange={(e)=>{handleChange(e)}}></input>
        <input name="title" type="text" value={product.title} placeholder='Title' onChange={(e)=>{handleChange(e)}}></input>
        <input name="price" type="text" value={product.price} placeholder='Price' onChange={(e)=>{handleChange(e)}}></input>
        <input name="brand" type="text" value={product.brand} placeholder='Brand' onChange={(e)=>{handleChange(e)}}></input>
        <input name="discount" type="text" value={product.gender} placeholder='Discount' onChange={(e)=>{handleChange(e)}}></input>
       <select onChange={(e)=>{handleChange(e)}}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="kids">Kids</option>
       </select>
       <button type="submit">Submit it</button>
        </form>
        
    </DIV>
  )
}

const DIV = styled.div`
width:400px;
margin: auto;
border:1px solid grey;
padding:10px;

input{
    width:100%;
    height:100%;
    font-size:large;
    gap:5px;
    margin-bottom:10px;
}

button{
    width:100%;
    height:100%;
}

form{
    display:flex;
    flex-direction:column;
    gap:5px;
    align-items:center;
}

select{
    width:50%;
    height:50%;

}


`;





