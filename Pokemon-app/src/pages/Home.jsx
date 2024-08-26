import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };

  return (
    <MainPage>
      <StartDiv>
        <PokemonTitle />
        <StartDivButton onClick={goToDex}>포켓몬 도감 시작하기</StartDivButton>
      </StartDiv>
    </MainPage>
  );
};

export default Home;

const fadeIn = keyframes`
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  `;

const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 20px;

  animation: ${fadeIn} 2s ease-in-out;
`;
const StartDivButton = styled.button`
  background-color: rgb(115, 197, 252);
  border: 2px solid #e2e2e2;
  width: 300px;
  height: 40px;
  border-radius: 15px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #9bd7ff;
  }
  &:active {
    border: 1px solid black;
  }
`;

const PokemonTitle = styled.div`
  width: 400px;
  height: 150px;
  background-image: url("/img/pokemon-removebg-preview.png");
  background-repeat: no-repeat;
  background-position: center;
`;
