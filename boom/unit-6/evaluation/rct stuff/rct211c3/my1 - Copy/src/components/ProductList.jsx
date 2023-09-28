import React, { useEffect } from 'react'
import { getProducts } from '../redux/productReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCart } from './ProductCart';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

export const ProductList = () => {
  
  const [serachParams]=useSearchParams();

    const products =useSelector((store)=>store.productReducer.products);
    // console.log("products",products);
    const dispatch=useDispatch();
    const location =useLocation();
    // console.log(location);

    // console.log("vvv",serachParams.getAll("gender"));

    let obj={
      params:{
        gender:serachParams.getAll("gender"),
        category:serachParams.getAll("category"),
        _sort:serachParams.get("order") && "price",
        _order:serachParams.get("order")
      }
    }

    useEffect(()=>{
        dispatch(getProducts(obj));

    },[location.search]);

  return (<DIV>
   {
    products.length>0 && products.map((el)=>{
      return <ProductCart key={el.id} {...el} />
    })
   }
   </DIV>
  )
}

const DIV=styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap:20px;
`