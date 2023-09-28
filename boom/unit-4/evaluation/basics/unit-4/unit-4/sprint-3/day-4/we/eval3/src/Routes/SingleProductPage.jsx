import { useEffect } from "react"
import { useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"


function SingleProductPage(){
    const {id}=useParams()
    const [url,setUrl]=useState({});
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
                .then((res)=>res.json())
                .then((ans)=>{
                    setLoading(false)
                    setUrl(ans.data)
                    // setLoading(false)
                    setLoading(true)
                })
                .catch((err)=>{
                    console.log(err)
                    setLoading(false)
                });
    },[id]);
    // if(url!=undefined){
    // const {brand,category,img,details,price}=url
    console.log(2,url)
    const {  price, category, details, image } =url
    
    return (
        !loading ?  <Loader/>:
         <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={img}/>
            </div>
            <div data-testid="product-category">Category:{category}
            </div>
           
            <div data-testid="product-details">Details:{details}
            </div>
            <div data-testid="product-price">Price:{price}
            </div>

            </div>
    )
    }
// }
// }
export default SingleProductPage