import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getProduct } from '../redux/productReducer/action';
import { ProductCart } from './ProductCart';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';


export const ProductList = () => {

    const[searchParams] = useSearchParams();

    // console.log(searchParams.getAll("category"));

const dispatch = useDispatch();
const {products} = useSelector((store)=>store.productReducer);
console.log("products",products)
const location = useLocation();
// console.log(location);
let obj={
    params:{
        category: searchParams.getAll("category"),
    }
}

useEffect(()=>{
    dispatch(getProduct(obj))
},[location.search]);

  return (
    <DIV>{products.length>0 && products.map((el)=>{
        return (<ProductCart key={el.id} {...el}></ProductCart>)
    }) }</DIV>
  )
}

const DIV = styled.div`
margin: 40px auto;
margin-left: 30px;
display:grid;
grid-template-columns: auto,auto,auto,auto;
gap:20px;

`;

