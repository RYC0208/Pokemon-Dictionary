import React from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled, { keyframes } from "styled-components";

const Dex = () => {

  return (
    <DexPage>
      <DashBoard />
      <PokemonList />
    </DexPage>
  );
};

export default Dex;

const fadeIn = keyframes`
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  `;

const DexPage = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;