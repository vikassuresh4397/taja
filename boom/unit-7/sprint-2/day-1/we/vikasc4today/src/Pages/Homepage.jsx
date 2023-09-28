import React from "react";
// import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
// import { BookList } from "../Components/BookList";
import PokemonList from "../components1/PokemonList"
export const Homepage = () => {
  return (
    <DIV>
      {/* <Sidebar />
      <BookList /> */}
      <PokemonList />
    </DIV>
  );
};

const DIV = styled.div`
  /* display: flex;
  gap: 10px; */
  width:500px
`;
