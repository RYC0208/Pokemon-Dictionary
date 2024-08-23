import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// 스타일드 컴포넌트
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
  background-color: red;
  border: 2px solid #3d3d3d;
  width: 300px;
  height: 40px;
  border-radius: 15px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #ff4949;
    &:active {
      background-color: #ffa7a7;
    }
  }
`;

const PokemonTitle = styled.div`
  width: 400px;
  height: 150px;
  background-image: url("/img/pokemon-removebg-preview.png");
  background-repeat: no-repeat;
  background-position: center;
`;
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
