

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Types.css'; 

const Types = () => {
  const [typesList, setTypesList] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [typePokemon, setTypePokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => {
        setTypesList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleTypeClick = (typeUrl) => {
    axios.get(typeUrl)
      .then(response => {
        setTypePokemon(response.data.pokemon);
      })
      .catch(error => {
        console.error(error);
      });

    setSelectedType(typeUrl);
  };

  return (
    <div className="types-container">
      <h2>Pokémon Types</h2>
      <ul className="types-list">
        {typesList.map(type => (
          <li
            key={type.name}
            onClick={() => handleTypeClick(type.url)}
            className={selectedType === type.url ? 'selected' : ''}
          >
            {type.name}
          </li>
        ))}
      </ul>
      {selectedType && (
        <div className="selected-type-pokemon">
          <h3>Pokémon of Selected Type</h3>
          <ul className="pokemon-list">
            {typePokemon.map(pokemon => (
              <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Types;

