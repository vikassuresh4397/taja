import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products}) => {
  return<div data-testid="products-container">{products?.map((el) => {
       return <ProductItem key ={el.id}
      title={el.title}
      price={el.price}
      image={el.image}
      category={el.category}
      />
  })}</div>;
};

// export
export default ProductList;