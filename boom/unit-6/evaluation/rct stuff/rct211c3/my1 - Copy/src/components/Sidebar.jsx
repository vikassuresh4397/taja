import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const Sidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initalGender = searchParams.getAll("gender");
    const initalCategory = searchParams.getAll("category");
    const [gender,setGender]=useState(initalGender || []);
    const [category,setCategory]=useState(initalCategory || []);
   

    // console.log(searchParams.getAll("gender"))
   

   
    const initialOrder=searchParams.get("order");
    const [order,setOrder] = useState(initialOrder || "");
    const handleSort = (e) =>{
      const {value} = e.target;
      // console.log(value);
      setOrder(value);
    }

    useEffect(()=>{
      let params={
          gender,
          category,
      }
      order && (params.order = order);
      setSearchParams(params)
    },[gender,category,order]);



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
const {value} =e.target;
let newCategory=[...category];
if(newCategory.includes(value)){
  newCategory = newCategory.filter((el)=>el!==value);
}else{
  newCategory.push(value);
}
setCategory(newCategory);
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
<input type="checkbox" value={"top-wear"} onChange={handleCategory} checked={category.includes("top-wear")} ></input>
<label>Top wear</label>
</div>

<div>
<input type="checkbox" value={"bottom-wear"} onChange={handleCategory} checked={category.includes("bottom-wear")} ></input>
<label>Bottom wear</label>
</div>

<div>
<input type="checkbox" value={"inner-wear"} onChange={handleCategory} checked={category.includes("inner-wear")} ></input>
<label>Inner wear</label>
</div>

<br />

<h3>Sort by Price</h3>

<div onChange={handleSort}>
<input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}></input>
<label>Ascending</label>
<input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"} ></input>
<label>Descending</label>
</div>

    </>

  )
}

