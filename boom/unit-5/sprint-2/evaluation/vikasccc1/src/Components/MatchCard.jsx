import React from "react";

export const MatchCard = ({id,competition,year,round,team1,team2}) => {

  // "id": 1,
  //     "competition": "UEFA Champions League",
  //     "year": 2011,
  //     "round": "GroupH",
  //     "team1": "Barcelona",
  //     "team2": "AC Milan",
  //     "team1goals": "2",
  //     "team2goals": "2"

  const handlecart = (value)=>{
    dispatch(addtoWhishlist(value))
  }
  return (
    <div className="match-card">
      {/* show the match details   */}
      {/* use any static image, its not provided in server data  */}
      {/* {
        Show image in image tag with class `match-image`
        - Show competition name with class `competition-name`
        - Show match year with class `match-year`
        - Show score along with team name for team1 with class `team-1`
        - Show score along with team name for team2 with class `team-2`
      } */}
   <img width={"200px"} className="match-image" src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"></img>
   <h3 className="competition-name">{competition}</h3>
   <h3 className="match-year">{year}</h3>
   <h3 className="team-1">{team1}</h3>
   <h3 className="team-2">{team2}</h3>
   <button className="add-to-watchlist" onClick={()=>handlecart(id)}></button>

   
    </div>
  );
};






// import { useDispatch } from "react-redux";
// import styled from "styled-components";
// import { addToCart } from "../Redux/CartReducer/action";



// export const ProductCard = ({id,thumbnail,title,brand,price,discountPercentage}) => {

//   const dispatch = useDispatch();
//   // console.log(id)
//   const handleAdd = (value) =>{
//     dispatch(addToCart(value))
//   }
//   return (
   
//     <DIV className="product-card">
//       {/* - Every product card will have a `add to cart` button with class `add-to-cart`
//        - Show image in image tag with class `product-image` 
//        - Show title with class `product-title` 
//        - Show brand in p tag with class `product-brand` 
//        - Show price in p tag with class `product-price` 
//        - Show discount in p tag with class `product-discount` 
//        * Do not add any extra text, only response values should be present * 
//       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
//        {/* <img src="" alt="" /> */}
//         <img width={"200px"} src={thumbnail} alt="img" className="product-image"/>
//         <h3 className="product-title">{title}</h3>
//         <p className="product-brand">{brand}</p>
//         <p className="product-price">{price}</p>
//         <p className="product-discount">{discountPercentage}</p>
//         <button className="add-to-cart" onClick={()=>handleAdd(id)}>ADD to Card</button>
//     </DIV>
  
//   );
// };


// const DIV = styled.div`
//   display: grid;
//   border: 1px solid black;
//   text-align: center;
//   margin-bottom: 10px;
//   grid-template-columns: repeat(3,1fr);
// `

