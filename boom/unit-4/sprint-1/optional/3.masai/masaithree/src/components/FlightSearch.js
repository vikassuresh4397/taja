import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const fetchData = async () => {
  const response = await fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1");
  return await response.json();
};

function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      const data = await fetchData();
      setFlights(data);
    };
    fetchFlights();
  }, []);

  const handleSearch = () => {
    const filteredFlights = flights.filter((flight) => flight.source === source && flight.destination === destination);
    setFlights(filteredFlights);
  };

  return (
    <div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input
            data-testid="source-input"
            placeholder="Source"
            onChange={(e) => setSource(e.target.value)}
          />
          <br />
          <br />
          <input
            data-testid="destination-input"
            placeholder="Destination"
            onChange={(e) => setDestination(e.target.value)}
          />
          <br />
          <br />
          <button data-testid="search-button" onClick={handleSearch}>
            Search
          </button>
        </section>
      </div>
      {flights.length ? (
        <SearchResults flights={flights} />
      ) : (
        <div data-testid="no-flights" className="">
          No Flights Found
        </div>
      )}
    </div>
  );
}

export default FlightSearch;
