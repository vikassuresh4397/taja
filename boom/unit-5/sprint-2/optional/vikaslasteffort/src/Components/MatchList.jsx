import React from "react";
import { useSelector } from "react-redux";
import {MatchCard} from "./MatchCard"


export const MatchList = () => {

  const matches = useSelector((store)=>store.matchReducer.matches)

  console.log(matches)


  return <div data-testid="match-list">
    {/* // Show matches here  */}
    {
      matches.length > 0 &&
      matches?.map((el)=>{
        return <MatchCard key={el.id} {...el}/>
      })
    }
  </div>;
};
