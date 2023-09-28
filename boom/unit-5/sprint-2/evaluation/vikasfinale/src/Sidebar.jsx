import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import styled from "styled-components";
import { getMatches } from "../Redux/Matches/action";

export const Sidebar = () => {
  const [order, setOrder] = useState("")
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const value = e.target.value
    setOrder(value)
  }


  const handlepage = (val) =>{
    setPage(prev => prev + val)
  }
  console.log(page)


  useEffect(()=>{
    const paramObj = {
      params: {
        _sort: "year",
        _order: order,
        _limit: limit,
        _page: page
      }
    }
    dispatch(getMatches(limit && paramObj))
  },[order,limit,page])






  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={(e)=>handleChange(e)}/>
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={(e)=>handleChange(e)}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. {page}</h3>
      <button data-testid="previous-page" disabled={page == 1} onClick={()=>handlepage(-1)} >Previous</button>
      <br />
      <br />
      <button data-testid="next-page" disabled={page == 6} onClick={()=>handlepage(1)} >Next</button>
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
