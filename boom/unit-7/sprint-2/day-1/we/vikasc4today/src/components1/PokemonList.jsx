import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PokemonList.css'; 

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="pokemon-list-container">
      {pokemonList.map(pokemon => (
        <div key={pokemon.name} className="pokemon-box">
          <Link to={`/pokemon/${pokemon.name}`}>
            {pokemon.name}
          </Link>
          <input type="checkbox" />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
