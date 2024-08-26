import React from "react";
import styled from "styled-components";
import RedButton from "./common/redButton";
import { usePokemon } from "../contexts/PokemonContext";

const PokemonCard = ({ pokemon, isSelected, onDetailClick }) => {
  const { addPokemon, deletePokemon } = usePokemon();

  return (
    <PokemonContainer onClick={onDetailClick}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonNumber>No. {pokemon.id}</PokemonNumber>
      </div>
      {isSelected ? (
        <RedButton
          text="삭제"
          onClick={(e) => {
            e.stopPropagation();
            deletePokemon(pokemon.id);
          }}
        />
      ) : (
        <RedButton
          text="추가"
          onClick={(e) => {
            e.stopPropagation();
            addPokemon(pokemon);
          }}
        />
      )}
    </PokemonContainer>
  );
};

export default PokemonCard;

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

const PokemonName = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const PokemonNumber = styled.p`
  font-size: 12px;
  color: #9b9b9b;
`;
