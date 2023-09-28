import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const Sidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initalGender = searchParams.getAll("gender");
    const [gender,setGender]=useState(initalGender || []);
    const [category,setCategory]=useState([]);


    // console.log(searchParams.getAll("gender"))

    useEffect(()=>{
        let params={
            gender
        }
        setSearchParams(params)
    },[gender])

    const handleGender=(e)=>{
    //  console.log(e.target.value);
    const {value} = e.target;
    let newGender = [...gender];
    if(newGender.includes(value)){
      newGender = newGender.filter((el)=>el!==value);
    }else{
        newGender.push(value);
    }  
    // console.log("newGender",newGender);
    setGender(newGender);

}

const handleCategory = (e)=>{

}

  return (
    <>
    <h3>Filter by gender</h3>

    <div>
    <input type="checkbox" value={"men"} onChange={handleGender}  checked={gender.includes("men")}></input>
    <label>men</label>
    </div>

    <div>
    <input type="checkbox"  value={"women"} onChange={handleGender}  checked={gender.includes("women")}></input>
    <label>women</label>
    </div>

    <div>
    <input type="checkbox" value={"kids"} onChange={handleGender} checked={gender.includes("kids")} ></input>
    <label>kids</label>
    </div>

    <br />

<h3>Filter by category</h3>

<div>
<input type="checkbox" value={"top-wear"} onChange={handleCategory} ></input>
<label>Top wear</label>
</div>

<div>
<input type="checkbox" value={"bottom-wear"} onChange={handleCategory} ></input>
<label>Bottom wear</label>
</div>

<div>
<input type="checkbox" value={"inner-wear"} onChange={handleCategory}></input>
<label>Inner wear</label>
</div>

<br />

<h3>Sort by Price</h3>

<div>
<input type="radio" name="order"></input>
<label>Ascending</label>
</div>

<div>
<input type="radio" name="order"></input>
<label>Descending</label>
</div>

    </>

  )
}

