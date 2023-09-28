import { useEffect } from "react"
import { useState } from "react";
import { useParams } from "react-router-dom"



function SingleProductPage(){
    const {id}=useParams()
    // console.log(id)
    const [url,setUrl]=useState([]);

    useEffect(()=>{
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
                .then((res)=>res.json())
                .then((ans)=>setUrl(ans.data))
                .catch((err)=> console.log(err));
    },[id]);

    // const {brand,category,img,details,price}=url
    console.log(2,url)

    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{url.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={url.img}/>
            </div>
            <div data-testid="product-category">Category:{url.category}
            </div>
           
            <div data-testid="product-details">Details:{url.details}
            </div>
            <div data-testid="product-price">Price:{url.price}
            </div>

            </div>
    )
}
export default SingleProductPage