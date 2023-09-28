import { useSelector } from "react-redux";

export const WatchListPage = () => {
  const cart=useSelector((store)=>store.watchListReducer.watchList);
  console.log(cart);
  return (
    <div>
      <div data-testid="watch-list">
        {
          cart?.map((el)=>(
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





