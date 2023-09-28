import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  useEffect(() => {

    const storedFavorites = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');

   
    const fetchFavoritesDetails = async () => {
      const favoriteDetailsPromises = storedFavorites.map(async (pokemonName) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.data;
      });

      const favoriteDetails = await Promise.all(favoriteDetailsPromises);
      setFavoritePokemon(favoriteDetails);
    };

    fetchFavoritesDetails();
  }, []);

  const removeFromFavorites = (pokemonName) => {
  
    const updatedFavorites = favoritePokemon.filter(pokemon => pokemon.name !== pokemonName);
    setFavoritePokemon(updatedFavorites);

   
    const updatedFavoriteNames = updatedFavorites.map(pokemon => pokemon.name);
    localStorage.setItem('favoritePokemon', JSON.stringify(updatedFavoriteNames));
  };

  return (
    <div>
      <h2>Favorite Pokémon</h2>
      {favoritePokemon.map((pokemon) => (
        <div key={pokemon.name}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        
          <button onClick={() => removeFromFavorites(pokemon.name)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;





























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Favorites = () => {
//   const [favoritePokemon, setFavoritePokemon] = useState([]);

//   useEffect(() => {
//     // Retrieve favorite Pokémon names from localStorage
//     const storedFavorites = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');

//     // Fetch details for each favorite Pokémon from the PokeAPI
//     const fetchFavoritesDetails = async () => {
//       const favoriteDetailsPromises = storedFavorites.map(async (pokemonName) => {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//         return response.data;
//       });

//       const favoriteDetails = await Promise.all(favoriteDetailsPromises);
//       setFavoritePokemon(favoriteDetails);
//     };

//     fetchFavoritesDetails();
//   }, []);

//   return (
//     <div>
//       <h2>Favorite Pokémon</h2>
//       {favoritePokemon.map((pokemon) => (
//         <div key={pokemon.name}>
//           <h3>{pokemon.name}</h3>
//           <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//           {/* Display other details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;
