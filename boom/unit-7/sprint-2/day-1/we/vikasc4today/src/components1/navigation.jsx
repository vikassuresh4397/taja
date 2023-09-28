import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Pokémon</Link>
      <Link to="/types">Types</Link>
      <Link to="/favorites">Favorites</Link>
     
    </nav>
  );
};

export default Navigation;
