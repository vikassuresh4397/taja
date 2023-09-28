import { useEffect } from "react";
import { useState } from "react";
import RestaurantCard from "../Components/ProductCard"
const getdata=async ()=>{
    return fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
    .then((res)=>res.json());
}

function ProductsTable({data}){
const [Apidata,setApidata]=useState([]);
const fetchdata=async ()=>{
    try {
        let response=await getdata();
        setApidata(response.data)
    } catch (err) {
        console.log(err)
    }
}
useEffect(()=>{
    fetchdata()
},[])

console.log(Apidata)

 return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {Apidata.map((item) => {
                        return <RestaurantCard key={item.id} brand={item.brand} category={item.category} price={item.price} id={item.id}/>
                    })}
                </tbody>
            </table>
    )
}

export default ProductsTable