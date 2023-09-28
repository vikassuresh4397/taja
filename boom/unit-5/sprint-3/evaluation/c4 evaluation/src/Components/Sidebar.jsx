import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams,setSearchParams] =useSearchParams();
  const initialBatch = searchParams.getAll("batch");
  const [batch,setBatch]=useState(initialBatch || []);
  const initialPage=searchParams.get("page");
  const [page,setPage]=useState(+initialPage||1);

  useEffect(()=>{
   let params={
    batch,
    page,
   };
   setSearchParams(params)
  },[batch,page])

  const handlePage = (value)=>{
   setPage((prev)=>{
    if(prev+value===0){
      return prev;
    }
    return prev+value;
   })
  }

const handleBatch=(e)=>{
    const {value}=e.target;
    let newBatch=[...batch];
    if(newBatch.includes(value)){
      newBatch=newBatch.filter(el=>el!==value)
    }else{
      newBatch.push(value);
    }
    setBatch(newBatch);
 
}

  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input data-testid="batch-web101"  type="checkbox" value={"WEB101"} checked={batch.includes("WEB101")}    onChange={handleBatch} />
        <label>WEB-101</label>
        <br />
        <br />
        <input data-testid="batch-js201" checked={batch.includes("JS201")} value={"JS201"}  type="checkbox" onChange={handleBatch} />
        <label>JS-201</label>
        <br />
        <br />
        <input data-testid="batch-rct101" checked={batch.includes("RCT101")}  value={"RCT101"} type="checkbox" onChange={handleBatch} />
        <label>RCT101</label>
        <br />
        <br />
        <input data-testid="batch-rct211" checked={batch.includes("RCT211")} value={"RCT211"}  type="checkbox" onChange={handleBatch} />
        <label>RCT211</label>
        <br />
        <br />
        <input data-testid="batch-nxm101" checked={batch.includes("NXM101")} value={"NXM101"}  type="checkbox"  onChange={handleBatch}/>
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev" onClick={()=>handlePage(-1)} >Previous</button>
        <button data-testid="page-next" onClick={()=>handlePage(1)} >Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
