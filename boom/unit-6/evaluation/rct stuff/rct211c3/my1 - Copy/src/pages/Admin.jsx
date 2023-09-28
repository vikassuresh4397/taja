import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productReducer/action';

const initalState={
  name:"",
  image:"",
  brand:"",
  price:"",
  category:"",
  gender:"",
};

export const Admin = () => {

const [product,setProduct] = useState(initalState);
const dispatch=useDispatch();

const handleChange = (e)=>{
// const {name,value} = e.target.value;
const {name,value} = e.target;
// console.log(name);
setProduct((prev)=>{
  return {...prev, [name]:name ==="price" ? +value:value};
});

};

const handleSubmit = (e) =>{
e.preventDefault();
console.log(product);
dispatch(addProduct(product));
setProduct(initalState);
};

  return (<>
   <div>Admin</div>
   <form onSubmit={handleSubmit}>
    <label>Product Name</label>

   <div><input 
   type="text" 
   name="name" 
   placeholder="Product Name" 
   value={product.name}
   onChange={(e)=>handleChange(e)}
   ></input></div>

   <label>Product Image</label>
   <div> <input 
   type="text" 
   placeholder="Product Image" 
   name="image" 
   value={product.image}
onChange={(e)=>handleChange(e)}
   ></input></div>

   <label>Brand</label>
   <div> <input
   type="text"
   placeholder="Brand" 
   name="brand" 
   value={product.brand}
onChange={(e)=>handleChange(e)}
   ></input></div>

   <label>Price</label>
   <div> <input 
   type="number" 
   placeholder="Price" 
   name="price" 
   value={product.price}
onChange={(e)=>handleChange(e)}
   ></input></div>

   <label>Category</label>
   <div>
   <select name="category" className="category-select"  value={product.category} onChange={(e)=>handleChange(e)}>
    <option value="">Select Category</option>
    <option value="top-wear">Top wear</option>
    <option value="bottom-wear">Bottom wear</option>
    <option value="shoes">Shoes</option>
   </select>
   </div>
  
   <label>Gender</label>
   <div>
   <select name="gender" className="gender-select" value={product.gender} onChange={(e)=>handleChange(e)}>
    <option value="">Select Gender</option>
    <option value="top-wear">Men</option>
    <option value="bottom-wear">Women</option>
    <option value="shoes">Kids</option>
   </select>
   </div>
   <button type="submit">Add Product</button>
   </form>
  
  </>)
}