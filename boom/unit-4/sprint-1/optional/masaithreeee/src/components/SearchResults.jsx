import React from "react";

const SearchResults = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody data-testid="flight-results">
        {props.flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.source}</td>
            <td>{flight.destination}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
