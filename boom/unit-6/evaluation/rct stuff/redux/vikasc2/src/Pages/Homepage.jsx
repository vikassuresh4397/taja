import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { ProductList } from "../Components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Redux/ProductReducer/action";

export const Homepage = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    getProducts(dispatch)
  },[]);

const products=useSelector((store)=>store.productReducer.products)

  return (
    <DIV>
      <Sidebar />
      <ProductList products={products} />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
