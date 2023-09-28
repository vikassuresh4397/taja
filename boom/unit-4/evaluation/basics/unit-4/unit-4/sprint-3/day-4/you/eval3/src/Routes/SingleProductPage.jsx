import { useEffect } from "react"
import { useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"


function SingleProductPage(){
    const {id}=useParams()
    const [url,setUrl]=useState([]);
    const [loading,setLoading]=useState(false);

    const getData=async()=>{
        try {
            let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
             let response = await res.json()
             return response

        } catch (error) {
            console.log(error)
        }

    }
    const fetchAndUpdate=async ()=>{
        setLoading(true)
        let final = await getData()
        setUrl(final.data)
        setLoading(false)
    }
     useEffect(()=>{
        fetchAndUpdate()
     },[id])
    //  console.log(url)

        if(!loading)
        return(
                <div data-testid="products-container">
                    <div>
                    <h3 data-testid="product-brand">{url.brand}</h3>
                    </div>
                    <div >
                    <img data-testid="product-image" src={url.img} alt={url.brand}/>
                    </div>
                    <div data-testid="product-category">{url.category}
                    </div>
                    <div data-testid="product-details">{url.details}
                    </div>
                    <div data-testid="product-price">{url.price}
                </div>
            </div>
        )
        return <Loader/>
    
}
export default SingleProductPage