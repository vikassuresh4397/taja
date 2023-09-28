import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

 
export const fetchData=async()=>{
  let api="https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1";
  let response=await fetch(api)
  let data=await response.json()
  return data
}


function FlightSearch() {
  // on page load fetch the data (useEffect)
  const [flightData,setFlightData]=useState([])
  const [source,setSource]=useState("")
  const [dest,setDest]=useState("")
  const [data,setData]=useState([])

  // const fetchData = async () => {
  //   // make fetch request to the mentioned api and return the result here
    
  //   try{
  //     let response = await fetch(api);
  //     let data= await response.json();
  //    // console.log(data)
  //   }catch(err){
  //       console.log(err,"error")
  //     }
  //     //    };
    useEffect(()=>{
      fetchData().then(res=>{
           console.log(res)
           setFlightData(res)
    })
  },[])
  const handleSearch = () => {
    const filteredData=flightData.filter((e)=>{
      return (
        source===e.source,
        dest===e.destination
      )
    })
    setData(filteredData)
  };
  const handleChange=(e)=>{
setDest(e.target.value)
  }
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" value={source} onChange={(e)=>setSource(e.target.value)} />
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" value={dest} onChange={handleChange} />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
     {
      data.length ? <SearchResults data={data}/>:<div data-testid="no-flights" className="">No Flights Found</div>
     }
      
           {/* // No Flights Found */}
    </div>
  );
}

export default FlightSearch;
