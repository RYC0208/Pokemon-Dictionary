import React, { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

// 스타일드 컴포넌트
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #ffffff97;
  border-radius: 10px;
`;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
    const [isSelected, setIsSelected] = useState(false);
  return (
    <ListContainer>
      {pokemonList.map(function (pokemon, index) {
        return (
            <PokemonCard 
                key={pokemon.id}
                pokemon={pokemon} 
                index={index}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                onAddPokemon={onAddPokemon}
             />
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;
