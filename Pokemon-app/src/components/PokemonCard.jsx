import React from "react";
import styled from "styled-components";
import RedButton from "./common/redButton";
import { usePokemon } from "../contexts/PokemonContext";

const PokemonCard = ({ pokemon, isSelected }) => {
  const { addPokemon, deletePokemon, goToDetail } = usePokemon();

  return (
    <PokemonContainer  onClick={() => goToDetail(pokemon.id)}>
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
  border: 2px solid rgb(179, 243, 252); 
  background: #ffffffb0;
  border-radius: 15px; 
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 12px;
  text-align: center;
  padding: 20px; 
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    background: linear-gradient(145deg, rgba(245, 245, 245, 0.9), rgba(157, 227, 255, 0.7));
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
