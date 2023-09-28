import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PokemonList.css';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`)
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [currentPage]);

  const totalPages = Math.ceil(pokemonList.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

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
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
