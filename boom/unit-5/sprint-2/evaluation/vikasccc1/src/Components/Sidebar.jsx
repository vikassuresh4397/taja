import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getMatches } from "../Redux/Matches/action";

export const Sidebar = () => {

  const [order,setOrder] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{
    const paramObj={
      params:{
        _sort:"year",
        _order:"order"
      }
    }
   dispatch(getMatches(paramObj && order));
  },[order]);

  const handleSort = (e)=>{
    const value = e.target.value;
    setOrder(value);
     
  };

  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={(e)=>handleSort(e)} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={(e)=>handleSort(e)}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. </h3>
      <button data-testid="previous-page">Previous</button>
      <br />
      <br />
      <button data-testid="next-page">Next</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;




