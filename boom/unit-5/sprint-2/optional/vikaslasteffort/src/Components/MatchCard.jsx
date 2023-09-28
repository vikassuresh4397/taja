import React from "react";
import { useDispatch } from "react-redux";
import { getWatchData } from "../Redux/WatchList/action";

export const MatchCard = ({id,competition,year,team1,team1goals,team2,team2goals}) => {
  
  const dispatch = useDispatch();

  const handleAdd = (val) => {
    console.log(val)
    dispatch(getWatchData(val))
  }



  // "id": 1,
  //     "competition": "UEFA Champions League",
  //     "year": 2011,
  //     "round": "GroupH",
  //     "team1": "Barcelona",
  //     "team2": "AC Milan",
  //     "team1goals": "2",
  //     "team2goals": "2"
  //   },
  
  return (
    <div className="match-card">
      {/* show the match details   */}
      {/* use any static image, its not provided in server data  */}
      <img className="match-image" width={"200px"}  src="https://i2-prod.football.london/incoming/article23615686.ece/ALTERNATES/s1200c/0_GettyImages-1389894941.jpg" alt="img" />
        <h3 className="competition-name">{competition}</h3>
        <p className="match-year">{year}</p>
        <h1 className="team-1">{team1} - {team1goals}</h1>
        <h1 className="team-2">{team2} - {team2goals}</h1>
        <button className="add-to-watchlist"
         onClick={()=>handleAdd(id)}
         >watchList</button>
    </div>
  );
};


