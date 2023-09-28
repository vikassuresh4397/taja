import { useSelector } from "react-redux";

export const CartPage = () => {
  const cart = useSelector((store) => store.cartReducer.cart);
  console.log("cart",cart);
  return <div data-testid="cart-list">{/* Map through cart store  */}
  {cart?.map((el) => (
        <div key={el.id} >
          <img
            width={"200px"}
            src={el.thumbnail}
            alt="img"
            className="product-image"
          />
          <h3 className="product-title">{el.title}</h3>
          <p className="product-brand">{el.brand}</p>
          <p className="product-price">{el.price}</p>
          <p className="product-discount">{el.discountPercentage}</p>
        </div>
      ))}
  </div>;
};

