import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";
import PokemonDetail from "../components/PokemonDetail";
import styled, {keyframes} from "styled-components";

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
const PkmDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const pokemonId = Number(searchParams.get("id"));
  console.log("pokemonId의 타입=>", typeof pokemonId);
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <DetailPage>
      <PokemonDetail pokemon={pokemon} onGoBack={goBack} />
    </DetailPage>
  );
};

export default PkmDetail;
