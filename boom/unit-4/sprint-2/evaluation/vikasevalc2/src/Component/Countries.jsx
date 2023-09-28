import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";
import LoadingIndicator from "./LoadingIndicator";

const feedmemore = (page) => {

  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`
  )
    .then((bee) => bee.json())
    .catch((e) => 
    console.error(e));
    
};

function Countries() {
  const [desh, setDesh] = useState([]);
  const [crntPage, setcrntPage] = useState(1);
  const [ttlpg, setttlpg] = useState(1);
  const [loading, setLoading] = useState(false);
let boom =desh.map((el) => (
  <CountriesCard
    key={el.id}
    country={el.country}
    population={el.population}
    
  />
));
  useEffect(() => {
    setLoading(true);
    feedmemore(crntPage).then((data) => {
      setDesh(data.data);
      setttlpg(data.ttlpg);
      setLoading(false);
    });
  }, [crntPage]);

  const woo = (val) => {

    setcrntPage(crntPage + val);
  };

  return loading ? (
    <LoadingIndicator />

  ) : (

    <div>
      <h1 data-testid="countries-header">Countries List</h1>

      <div data-testid="countries-container">

        {boom}
      </div>
      <Pagination current={crntPage} total={ttlpg} onChange={woo} />
    </div>
  );
}

export default Countries;
