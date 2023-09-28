import { useDispatch, useSelector } from "react-redux";

export const WatchListPage = () => {
  const watchList = useSelector((store) => store.watchListReducer.watchList);
  console.log(watchList);

  return (
    <div>
      {watchList.map((el) => {
        return (
          <div key={el.id} data-testid="watch-list" className="match-card">
            <img
              width={"200px"}
              className="match-image"
              src="https://i2-prod.football.london/incoming/article23615686.ece/ALTERNATES/s1200c/0_GettyImages-1389894941.jpg"
              alt="img"
            />
            <h3 className="competition-name">{el.competition}</h3>
            <p className="match-year">{el.year}</p>
            <p className="team-1">
              {el.team1} - {el.team1goals}
            </p>
            <p className="team-2">
              {el.team2} - {el.team2goals}
            </p>
          </div>
        );
      })}
    </div>
  );
};


/////-----//