import axios from "axios"
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getProductFailure, getProducts, getProductSuccess } from "../Redux/ProductReducer/action";

export const ProductList = () => {

     const dispatch = useDispatch()

      const todos = useSelector(store => {
   
    return store.productReducer.products
  })
 

  const getData = () => {
            dispatch(getProducts())

    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`).then((res)=>{
    
        dispatch(getProductSuccess(res.data));

    }).catch((err)=> {

        console.log(err)  

      dispatch(getProductFailure())
    })
    ilk
  }

  useEffect(()=>{

    getData()

  },[])

  const handlecartADD = (id) => {
 
  }

  return (
    <div data-testid="product-list">
     
      {
        todos.length > 0 &&
        todos[0].map((item)=>{
          return (
            <div className="product-card" key={item.id}
            // style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}
            >
              <img src={item.images[0]} alt={item.title} width="200px" className="product-image"/>
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">{item.price}</p>
              <p className="product-discount">{item.description}</p>
              <button onClick={handlecartADD(item.id)} className="add-to-cart" >ADD To Cart</button>
            </div>
          )
        })
      }
    </div>
  );
};