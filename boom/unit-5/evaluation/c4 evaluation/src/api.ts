import axios, { AxiosResponse } from "axios"
import { formDataType } from "./Pages/AddProduct";

const URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`


export const addProduct = async(payload:formDataType) => {
  // Add product functionality here
const res: AxiosResponse<formDataType>=await axios.post(URL,payload);
console.log("resi",res.data)
return res.data;

};

export const getProducts = async() => {
  // Get products functionality
  const res: AxiosResponse<formDataType[]>=await axios.get(URL);
  return res.data;
};

export const updateLike = async(id:number) => {
  // Update like functionality
  const res: AxiosResponse<formDataType>=await axios.get(`${URL}/${id}`);
  const payload ={like:res.data.like+1};
  const data : AxiosResponse<formDataType>=await axios.patch(`${URL}/${id}`,payload);
  return data;
};

export const updateDisLike = async(id:number) => {
  
  const res: AxiosResponse<formDataType>=await axios.get(`${URL}/${id}`);
  const payload ={dislike:res.data.dislike+1};
  const data : AxiosResponse<formDataType>=await axios.patch(`${URL}/${id}`,payload);
  return data;
};

// export const deleteProduct = () => {
//   // Delete functionality
// };

export const deleteProduct = async (id: number) => {
  // Delete functionality
  const res: AxiosResponse = await axios.delete(`${URL}/${id}`);
  return res.data;
};