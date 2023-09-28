import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
export default function ProductDetails() {
const {id}=useParams();
console.log(id)
const [userDetails, setuserDetails] = useState([]);

useEffect(() => {
  fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
    .then((res) => res.json())
    .then((data) => setuserDetails(data))
    .catch((err) => console.log(err));
}, [id]);
  return (
    <div data-testid = "product-details" >
      <div>
      <h1 data-testid="product_name" >{userDetails.name}</h1>  
      </div>
    </div>
  )
}
