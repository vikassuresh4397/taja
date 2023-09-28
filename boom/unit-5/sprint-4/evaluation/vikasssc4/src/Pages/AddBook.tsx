import React,{useState} from "react";
import { Navbar } from "../Components/Navbar";
import { addBook } from "../api";

const initalState={
  name: "",
  author: "",
  image: "",
  chapter: 5,
  quantity: 2,
  id: 2
};

export interface formDataType{
  name: string;
  author: string;
  image: string;
  chapter: number;
  quantity: number;
  id?: number;
}

export const AddBook = () => {
  const [formData,setFormData] = useState<formDataType>(initalState);

  const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;
    console.log(name);
    setFormData((prev)=>{
      return {...prev, [name]:name ==="quantity"?+value :value};
    })
    // setFormData({...formData, [e.target.value] : e.target.value})
  }

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("formData",formData);
    addBook(formData)
    setFormData(initalState);
    // addProduct(formData);
  }



  return (
    <div>
     <Navbar  />
      <form onSubmit={handleSubmit}>

        <input type="text" 
        className="book-name" 
        placeholder="name" 
        name="name" 
        value={formData.name} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <input type="text" 
        className="book-image" 
        placeholder="Image" 
        name="image" 
        value={formData.image} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <input type="text" 
        className="book-author" 
        placeholder="Author" 
        name="author" 
        value={formData.author} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <input type="number" 
        className="book-chapter" 
        placeholder="Chapter" 
        name="chapter" 
        value={formData.chapter} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <input type="number" 
        className="book-quantity" 
        placeholder="Quanity" 
        name="quantity" 
        value={formData.quantity} 
        onChange={(e)=>handleChange(e)}
        ></input>

        <button className="submit-form">Add</button>

      </form>
    </div>
  );
};
