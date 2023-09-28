import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        setPokemonDetails(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [pokemonName]);

  useEffect(() => {
    const favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');
    setIsFavorite(favoritePokemon.includes(pokemonName));
  }, [pokemonName]);

  const handleFavoriteClick = () => {
    const favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');

    if (isFavorite) {
      const updatedFavorites = favoritePokemon.filter(name => name !== pokemonName);
      localStorage.setItem('favoritePokemon', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favoritePokemon, pokemonName];
      localStorage.setItem('favoritePokemon', JSON.stringify(updatedFavorites));
    }

    setIsFavorite(prevIsFavorite => !prevIsFavorite);
  };

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />

  
      <p>ID: {pokemonDetails.id}</p>
      <p>Base Experience: {pokemonDetails.base_experience}</p>
      <p>HP: {pokemonDetails.stats[0].base_stat}</p>
      <p>Attack: {pokemonDetails.stats[1].base_stat}</p>
      <p>Defense: {pokemonDetails.stats[2].base_stat}</p>
      <p>Special Attack: {pokemonDetails.stats[3].base_stat}</p>
      <p>Special Defense: {pokemonDetails.stats[4].base_stat}</p>
      <p>Speed: {pokemonDetails.stats[5].base_stat}</p>
      <p>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
      <p>Moves: {pokemonDetails.moves.map(move => move.move.name).join(', ')}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Height: {pokemonDetails.height}</p>

      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default PokemonDetails;
