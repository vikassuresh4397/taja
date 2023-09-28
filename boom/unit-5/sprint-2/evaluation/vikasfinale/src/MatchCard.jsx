import React from "react";
import { useDispatch } from "react-redux";
import { getWatchListData } from "../Redux/WatchList/action";

export const MatchCard = ({id,competition,year,team1,team1goals,team2,team2goals}) => {
  
  const dispatch = useDispatch();

  const handleAdd = (val) => {
    console.log(val)
    dispatch(getWatchListData(val))
  }
  
  return (
    <div className="match-card">
      {/* show the match details   */}
      {/* use any static image, its not provided in server data  */}
      <img width={"200px"} className="match-image" src="https://i2-prod.football.london/incoming/article23615686.ece/ALTERNATES/s1200c/0_GettyImages-1389894941.jpg" alt="img" />
        <h3 className="competition-name">{competition}</h3>
        <p className="match-year">{year}</p>
        <p className="team-1">{team1} - {team1goals}</p>
        <p className="team-2">{team2} - {team2goals}</p>
        <button className="add-to-watchlist" onClick={()=>handleAdd(id)}>watchList</button>
    </div>
  );
};


/////---//