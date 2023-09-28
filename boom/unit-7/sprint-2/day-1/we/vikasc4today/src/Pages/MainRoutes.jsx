import React from "react";
import { Route, Routes } from "react-router-dom";
import {Homepage} from "./Homepage";
// import { Login } from "./Login";
import Types from "../components1/Types"
import Favorites from "../components1/Favorites";
import PokemonDetails from "../components1/PokemonDetails"
// import { EditBook } from "./EditBook";
// import { PrivateRoute } from "../Components/PrivateRoute";
export const MainRoutes = () => {
  return <Routes>{/* Provide all Routes here */}
  
   <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path="/types" element={<Types></Types>}></Route>
    <Route path="/favorites" element={<Favorites></Favorites>}></Route>
    <Route path="/pokemon/:pokemonName"  element={<PokemonDetails></PokemonDetails>} />
    {/* <Route path="/pokemon/:pokemonName" component={PokemonDetails} /> */}
    <Route path="*" element={<h3>404 page not found</h3>} />
  </Routes>;
};
