import React,{useState} from "react";
import { Navbar } from "../Components/Navbar";
import { addProduct } from "../api";

const initialState={
  name: "",
  brand: "",
  price: 0,
  image: "",
  like: 0,
  dislike: 0,
};

export interface formDataType{
  name: string,
  brand: string,
  price: number,
  image: string,
  like: number,
  dislike: number,
  id?:number,
}

export const AddProduct = () => {

const [formData,setFormData] = useState<formDataType>(initialState);

const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
  const {name,value} = e.target;
  console.log(name);
  setFormData((prev)=>{
    return {...prev, [name]:name ==="price"?+value :value};
  })
  // setFormData({...formData, [e.target.value] : e.target.value})
}

const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  console.log("formData",formData);
 addProduct(formData)
  setFormData(initialState);
  // addProduct(formData);
}

  return (
    <div>
     <Navbar  />
      <form onSubmit={handleSubmit}>

        <input type="text" 
        className="product-name" 
        
        placeholder="name" 
        name="name" 
        value={formData.name} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <input type="text" 
        className="product-brand" 
        
        placeholder="brand" 
        name="brand" 
        value={formData.brand} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <input type="number" 
        className="product-price" 
        
        placeholder="price" 
        name="price" 
        value={formData.price} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <input type="text" 
        className="product-image" 
        
        placeholder="image" 
        name="image" 
        value={formData.image} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <button className="submit-form">Add</button>

      </form>
    </div>
  );
};
