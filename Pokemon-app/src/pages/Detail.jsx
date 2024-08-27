import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../Mock";
import styled, { keyframes } from "styled-components";

const PkmDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const pokemonId = Number(searchParams.get("id"));
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  const onGoBack = () => {
    navigate(`/dex`);
  };
  const onPrevPokemon = () => {
    if (pokemonId-1 > 0) {
      navigate(`/detail?id=${pokemonId - 1}`);
    }else {
      navigate(`/detail?id=${151}`);
    }
  };
  const onNextPokemon = () => {
    if (pokemonId+1 < 152) {
      navigate(`/detail?id=${pokemonId + 1}`);
    } else{
      navigate(`/detail?id=${1}`);
    }
  };
  return (
    <DetailPage>
      {!pokemon ? (
        <NoPokemonMessage>포켓몬을 찾을 수 없습니다.</NoPokemonMessage>
      ) : (
        <DetailContainer>
          <DescriptionBox>
              <GoBackButton onClick={onGoBack}>고 백</GoBackButton>
            <ImageDetails>
              <ImageContainer>
                <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
              </ImageContainer>
              <DetailsContainer>
                <PokemonNumber>No. {pokemon.id}</PokemonNumber>
                <PokemonName>{pokemon.korean_name}</PokemonName>
                <PokemonType>속성: {pokemon.types.join(", ")}</PokemonType>
                <PokemonDescription>{pokemon.description}</PokemonDescription>
              </DetailsContainer>
            </ImageDetails>
            <ButtonContainer>
              <NextAndPrevButton onClick={onPrevPokemon}>이전 포켓몬</NextAndPrevButton>
              <NextAndPrevButton onClick={onNextPokemon}>다음 포켓몬</NextAndPrevButton>
            </ButtonContainer>
          </DescriptionBox>
        </DetailContainer>
      )}
    </DetailPage>
  );
};

export default PkmDetail;

const fadeIn = keyframes`
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    `;

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;

  animation: ${fadeIn} 0.2s ease-in-out;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 750px;
  min-height: 200px;
`;
const ImageDetails = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 150px;
  height: 150px;
`;

const PokemonImg = styled.img`
  width: 100%;
  height: 100%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PokemonNumber = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
`;

const PokemonName = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const PokemonType = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const PokemonDescription = styled.p`
  font-size: 12px;
  margin: 10px 0;
  width: 400px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const NextAndPrevButton = styled.button`
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
const GoBackButton = styled.button`
  position: absolute;
  height: 35px;
  width: 70px;  
  border: none;
  background-color: #e9e9e9b3;
  border-radius: 5px;
  margin-left: 530px;
  
  cursor: pointer;

  &:hover {
    background-color: #c9c9c9;
  }

  &:active {
    border: 2px solid black;
  }
`
const NoPokemonMessage = styled.div`
  font-size: 18px;
  color: gray;
  text-align: center;
  margin-top: 20px;
`;
