import React, { useState } from "react";
import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled, { keyframes } from "styled-components";
import MOCK_DATA from "../mock";

// 스타일드 컴포넌트
const fadeIn = keyframes`
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  `;
console.log(MOCK_DATA);
const DexPage = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;

  animation: ${fadeIn} 0.5s ease-in-out;
`;
const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const addPokemon = (pokemon) => {
      setSelectedPokemon([...selectedPokemon, pokemon])
    }
    console.log("selectedPokemon=>", selectedPokemon);
  return (
    <DexPage>
      <DashBoard selectedPokemon={selectedPokemon} />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon}/>
    </DexPage>
  );
};

export default Dex;
