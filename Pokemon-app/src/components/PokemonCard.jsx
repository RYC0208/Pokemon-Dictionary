import React from "react";
import styled from "styled-components";
const PokemonContainer = styled.div`
  border: 1px solid rgb(146, 146, 146);
  background-color: rgba(255, 255, 255, 0.767);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
const AddPokemonButton = styled.button`
  background-color: red;
  color: white;
  border: 1px solid white;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    background-color: #b90000;
  }

  &:active {
    border: 1px solid black;
  }
`;
const PokemonName = styled.p`
  font-weight: bold;
  font-size: 14px;
`;
const PokemonNumber = styled.p`
  font-size: 12px;
  color: #9b9b9b;
`;
const PokemonCard = ({ pokemon, index, isSelected, onAddPokemon }) => {
  return (
    <PokemonContainer>
      <img src={pokemon.img_url} alt="" />
      <div>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonNumber>No. {index + 1}</PokemonNumber>
      </div>
      {isSelected ? (
          <AddPokemonButton>삭제</AddPokemonButton>
        ) : (
        <AddPokemonButton onClick={() => onAddPokemon(pokemon)}>추가</AddPokemonButton>
        )}
    </PokemonContainer>
  );
};

export default PokemonCard;
