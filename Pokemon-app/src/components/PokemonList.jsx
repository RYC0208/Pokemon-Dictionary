import React, { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, onAddPokemon, onDetailClick }) => {
  return (
    <ListContainer>
      {pokemonList.map(function (pokemon, index) {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            index={index}
            isSelected={false}
            onAddPokemon={onAddPokemon}
            onDetailClick={() => onDetailClick(pokemon.id)}
          />
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #ffffff97;
  border-radius: 10px;
`;
