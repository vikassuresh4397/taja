import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../Redux/ProductReducer/action";
import { useDispatch } from "react-redux";

export const Sidebar = () => {
  const [order, setorder] = useState("");
  const [page, setpage] = useState(0);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    const value = e.target.value;
    setorder(value);
  };
  
  useEffect(() => {
  const paramObj = {
    params: {
      _sort: "discountPercentage",
      _order: order,
    },
  };
    dispatch(getProducts(order && paramObj));
  }, [order]);
  return (
    <DIV>
      <h3>Sort By Discount</h3>
      <div>
        <input
          data-testid="sort-asc"
          type="radio"
          name="sort"
          value={"asc"}
          onChange={(e) => handleSort(e)}
        />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={(e) => handleSort(e)}
        />
        <label>Descending</label>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
