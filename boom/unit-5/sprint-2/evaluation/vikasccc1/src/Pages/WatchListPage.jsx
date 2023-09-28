import { useSelector } from "react-redux";

export const WatchListPage = () => {
  const cart=useSelector((store)=>store.watchListReducer.watchList);
  console.log(cart);
  return (
    <div>
      <div data-testid="watch-list">
        {
          WatchListPage?.map((el)=>(
            <div>
             <img width={"200px"} className="match-image" src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"></img>
   <h3 className="competition-name">{el.competition}</h3>
   <h3 className="match-year">{el.year}</h3>
   <h3 className="team-1">{el.team1}</h3>
   <h3 className="team-2">{el.team2}</h3>

            </div>
          ))
        }
      </div>
    </div>
  );
};





// import { useSelector } from "react-redux";

// export const CartPage = () => {
//   const cart = useSelector((store) => store.cartReducer.cart);

//   // console.log(cart);

//   return (
//     <div data-testid="cart-list">
//       {/* Map through cart store  */}

//       {cart?.map((el) => (
//         <div key={el.id} >
//           <img
//             width={"200px"}
//             src={el.thumbnail}
//             alt="img"
//             className="product-image"
//           />
//           <h3 className="product-title">{el.title}</h3>
//           <p className="product-brand">{el.brand}</p>
//           <p className="product-price">{el.price}</p>
//           <p className="product-discount">{el.discountPercentage}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
