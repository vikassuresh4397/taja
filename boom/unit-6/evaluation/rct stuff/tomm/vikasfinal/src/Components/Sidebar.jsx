import { useEffect } from "react";
import styled from "styled-components";

import { getProducts } from "../Redux/ProductReducer/action";
import { useSelector } from "react-redux";
export const Sidebar = () => {

const product = useSelector((store)=>{
  return store.products
})
useEffect(()=>{
  getProducts()
})

  return (
    <DIV>
      <h3>Sort By Discount</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
