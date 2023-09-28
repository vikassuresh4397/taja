import { ProductCard } from "./ProductCard";

export const ProductList = ({products}) => {
  return (
    <div data-testid="product-list">
      {
        products?.map((el)=>(
          <ProductCard {...el} key={el.id}></ProductCard>
        ))
      }
    </div>
  );
};
