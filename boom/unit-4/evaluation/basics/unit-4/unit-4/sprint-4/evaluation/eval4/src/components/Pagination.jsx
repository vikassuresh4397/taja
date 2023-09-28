import React from "react";
import {Button,ButtonGroup,Select} from "@chakra-ui/react"
const Pagination = ({page,totalPage,limit,onlimitChange}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  const handleSelectChange=(e)=>{
     limit=e.target.value
     onlimitChange(limit,page)
  }
  const handlePagechange=(page)=>{
    onlimitChange(limit,page)
  }
  const handleChange=(diff)=>{
    onlimitChange(limit,page+diff)
  }
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" disabled={page==1} onClick={()=>handlePagechange(1)}>First</Button>
      <Button data-cy="pagination-previous-button" disabled={page==1} onClick={()=>handleChange(-1)} >Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={handleSelectChange} >
        <option data-cy="pagination-limit-3" >3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={page===totalPage} onClick={()=>handleChange(1)} >Next</Button>
      <Button data-cy="pagination-last-button" disabled={page===totalPage} onClick={()=>handlePagechange(totalPage)} >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
