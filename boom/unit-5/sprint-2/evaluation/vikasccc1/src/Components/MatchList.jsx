import React from "react";
import { useSelector } from "react-redux";
import {MatchCard} from "./MatchCard"
export const MatchList = () => {
  const products=useSelector((store)=>store.matchReducer.matches);
  console.log("products",products);
  
  return <div data-testid="match-list">{/* // Show matches here  */}
  {
    products.length>=0 && 
    products.map((el)=>{
      return <MatchCard key={el.id} {...el}></MatchCard>
    })
  }
  
  </div>;

};



