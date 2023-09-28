import React, { useEffect } from "react";
import {Button,ButtonGroup,Select} from "@chakra-ui/react"
const Pagination = (props) => {
  const {page,totalPage,limit,setLimit,setPage,getProducts} = props
  React.useEffect(()=>{
    getProducts(page)
  },[limit,page])
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" isDisabled={page===1} onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" isDisabled={page===1} onClick={()=>setPage(page-1)} >Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>{setLimit(e.target.value)}} >
        <option data-cy="pagination-limit-3" >3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" isDisabled={page===totalPage} onClick={()=>setPage(page+1)} >Next</Button>
      <Button data-cy="pagination-last-button" isDisabled={page===totalPage} onClick={()=>setPage(totalPage)} >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
