import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../Redux/CartReducer/action";



export const ProductCard = ({id,thumbnail,title,brand,price,discountPercentage}) => {

  const dispatch = useDispatch();
  // console.log(id)
  const handleAdd = (value) =>{
    dispatch(addToCart(value))
  }
  return (
   
    <DIV className="product-card">
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
      * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
       {/* <img src="" alt="" /> */}
        <img width={"200px"} src={thumbnail} alt="img" className="product-image"/>
        <h3 className="product-title">{title}</h3>
        <p className="product-brand">{brand}</p>
        <p className="product-price">{price}</p>
        <p className="product-discount">{discountPercentage}</p>
        <button className="add-to-cart" onClick={()=>handleAdd(id)}>ADD to Card</button>
    </DIV>
  
  );
};


const DIV = styled.div`
  display: grid;
  border: 1px solid black;
  text-align: center;
  margin-bottom: 10px;
  grid-template-columns: repeat(3,1fr);
`
