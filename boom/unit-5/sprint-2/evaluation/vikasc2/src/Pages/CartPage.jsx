import { useSelector } from "react-redux";

export const CartPage = () => {

  const data= useSelector((store)=>store.cartReducer.cart)


  return <div data-testid="cart-list">
{
  data?.map((el)=>{
    <div className="product-card" key={el.id}>
      <img src={el.thumbnail} className="product-image" height="200px" width="200px"></img>
      <h1 className="product-title">{el.title}</h1>
      <p className="product-brand">{el.brand}</p>
      <p className="product-price">{el.price}</p>
      <p className="product-discount">{el.discountPercentage}</p>
    </div>
  })
}
    
  </div>;
};
