import axios from "axios";
import { AxiosResponse } from "axios";
import { formDataType } from "./Pages/AddBook";

const URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`
export const addBook =  async(payload:formDataType) => {
    // Add product functionality here
  const res: AxiosResponse<formDataType>=await axios.post(URL,payload);
  console.log("resi",res.data)
  return res.data;
  
  };

export const getBooks = async() => {
  // Get products functionality
  const res: AxiosResponse<formDataType[]>=await axios.get(URL);
  return res.data;
};

export const updateQuantity = async(id:number) => {
  // Update like functionality
  const res: AxiosResponse<formDataType>=await axios.get(`${URL}/${id}`);
  const payload ={quantity:res.data.quantity+1};
  const data : AxiosResponse<formDataType>=await axios.patch(`${URL}/${id}`,payload);
  return data;
};



export const deleteBook =async(id: number) => {
  // Delete functionality
  const res: AxiosResponse = await axios.delete(`${URL}/${id}`);
  return res.data;
};