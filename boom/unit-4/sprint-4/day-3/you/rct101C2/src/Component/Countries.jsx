import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";

function Countries() { 
  // return <LoadingIndicator />;
const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=1&limit=10`).then((res)=>res.json()).then((data)=>{
      console.log("data",data.data);
      return setData(data.data)

    }).catch((error)=>console.log(error))
  })

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
       {

        
        data.map((el)=>{
          return (<CountriesCard key={el.id} id={el.id} country={el.country} population={el.population} Rank={el.Rank} />)
        })
       }

        
      </div>
      <div>
        {/* Pagination */}
      </div>
    </div>
  );
}

export default Countries;
