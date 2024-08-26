import React from "react";
import styled from "styled-components";

function PokemonDetail({ pokemon, onGoBack }) {
  return (
    <>
      {!pokemon ? (
        <div>포켓몬을 찾을 수 없습니다.</div>
      ) : (
        <DetailContainer>
          <DescriptionBox>
            <div>
              <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
            </div>
            <div>
              <PokemonNumber>No. {pokemon.id}</PokemonNumber>
              <PokemonName>{pokemon.korean_name}</PokemonName>
              <PokemonType>속성: {pokemon.types.join(", ")}</PokemonType>
              <p>{pokemon.description}</p>
            </div>
            <GoBackButton onClick={onGoBack}>이전으로</GoBackButton>
          </DescriptionBox>
        </DetailContainer>
      )}
    </>
  );
}

export default PokemonDetail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PokemonImg = styled.img`
  width: 200px;
  height: 200px;
`;
const PokemonNumber = styled.p`
  font-size: 12px;
  color: gray;
`;
const PokemonType = styled.p`
  font-size: 14px;
`;
const PokemonName = styled.h2``;
const DescriptionBox = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
`;
const GoBackButton = styled.button`
  color: white;
  border: 1px solid gray;
  background-color: rgb(115, 197, 252);
  border-radius: 5px;
  width: 100px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #3d779e;
  }

  &:active {
    border: 2px solid black;
  }
`;
