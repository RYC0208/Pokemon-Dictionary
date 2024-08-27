import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../contexts/PokemonContext";

const DashBoard = () => {
  const { pokemonSlots} = usePokemon(); 

  return (
    <DashBoardContainer>
      <DashBoardTitle>포켓몬 컬렉션</DashBoardTitle>
      <DashBoardGroup>
        {pokemonSlots.map((pokemon, index) =>
          pokemon ? (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isSelected={true}
              onDetailClick={() => onDetailClick(pokemon.id)}
            />
          ) : (
            <DashBoardItem key={Date.now() + index}>
              <DashBoardPokemonBall src="/img/pokeball.png" alt="포켓볼" />
            </DashBoardItem>
          )
        )}
      </DashBoardGroup>
    </DashBoardContainer>
  );
};

export default DashBoard;

const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.767);
`;
const DashBoardTitle = styled.h2`
  color: rgb(125, 203, 255);
`;
const DashBoardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;
const DashBoardItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(227, 244, 255);
  border: 1px dotted rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const DashBoardPokemonBall = styled.img`
  width: 50px;
  height: 50px;
`;
