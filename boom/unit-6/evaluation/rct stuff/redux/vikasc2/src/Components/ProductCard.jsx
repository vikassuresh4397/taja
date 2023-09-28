import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer/action";

export const ProductCard = ({thumbnail,title,brand,price,discountPercentage,id}) => {
  
  const dispatch = useDispatch();
  const handleAddCart=()=>{
    addToCart(dispatch,id)
  }
  
  
  return (
    <div className="product-card">
      <img src={thumbnail} className="product-image" height="200px" width="200px"></img>
      <h1 className="product-title">{title}</h1>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>
      <p className="product-discount">{discountPercentage}</p>
      <button className="add-to-cart" onClick={handleAddCart}>add to cart</button>
    </div>
  );
};
