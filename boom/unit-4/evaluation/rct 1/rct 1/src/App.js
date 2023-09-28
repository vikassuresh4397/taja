import "./App.css";

function App() {
  return <div>{/* add MObileOs component here */}</div>;
}

import React from "react";

const ProductItem = ({ title, price, image, category }) => {
  return (
    <div
      data-testid="product-item"
    
    >
      <img data-testid="product-image"  />
      <b data-testid="product-title">{title}</b>
      <span data-testid="product-price" >₹ {price}</span>
      <div>
        <b data-testid="product-category" >{category}</b>
      </div>
    </div>
  );
};
export default ProductItem;


export default App;
