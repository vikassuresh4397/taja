
import { useSelector } from 'react-redux'

import { ProductCard } from './ProductCard';


export const ProductList = () => {
  
  const products = useSelector((store)=>store.productReducer.products)
 
  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
      {
        products.length > 0 &&
        products.map((el)=>{
          return <ProductCard key={el.id} {...el} />
        })
      }
    </div>
  );
};
