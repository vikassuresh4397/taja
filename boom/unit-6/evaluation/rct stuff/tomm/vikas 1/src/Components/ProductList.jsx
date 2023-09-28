import { useSelector } from "react-redux";
import {ProductCard} from "./ProductCard"
export const ProductList = () => {
  const prod=useSelector((store)=>store.productReducer.products);
  console.log("prod",prod);
  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
     {prod.length>0 && 
     prod.map((el)=>{
      return(<ProductCard key={el.id} {...el}></ProductCard>)
     })
}
    </div>
  );
};
