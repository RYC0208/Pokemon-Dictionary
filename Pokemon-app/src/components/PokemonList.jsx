import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../contexts/PokemonContext";
import MOCK_DATA from "../Mock";

const PokemonList = ({ onDetailClick }) => {
  const { addPokemon } = usePokemon();

  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          index={index}
          isSelected={false}
          onAddPokemon={addPokemon}
          onDetailClick={() => onDetailClick(pokemon.id)}
        />
      ))}
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
