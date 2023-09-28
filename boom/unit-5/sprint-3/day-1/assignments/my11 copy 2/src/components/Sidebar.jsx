import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';
// import useSearchParams from "react-router-dom"
export const Sidebar = () => {
    // const [searchParams,setsearchParams]=useSearchParams();

    const [searchParams,setsearchParams] = useSearchParams();
const [category,setCategory] = useState([]);


    const handleChange = (e) => {
        // console.log(e.target.value);
       let newCategory=[...category];
       const value = e.target.value;

       if(newCategory.includes(value)){
        newCategory=newCategory.filter((el)=>el!==value)
       }else{
        newCategory.push(value);
       }
    //  console.log(category)
       setCategory(newCategory);
    };

    useEffect(()=>{
        let params={
            category,
        }
        setsearchParams(params);
        // console.log(searchParams.getAll("category"));
    },[category]);

  return (
    <DIV>
         <div>Sidebar</div>
         <div>
            <input type="checkbox" value={"male"} onChange={handleChange}></input>
            <label>Men</label>
         </div>
         <div>
            <input type="checkbox" value={"female"} onChange={handleChange}></input>
            <label>Women</label>
         </div> 
         <div>
            <input type="checkbox" value={"kids"} onChange={handleChange}></input>
            <label>Kids</label>
         </div> 
    </DIV>
   

  )
}

const DIV = styled.div`

`;