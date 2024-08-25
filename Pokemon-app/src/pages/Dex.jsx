import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled, { keyframes } from "styled-components";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const navigate = useNavigate();

  const goToDetail = (pokemonId) => {
    navigate(`/detail?id=${pokemonId}`);
  };

  const addPokemon = (pokemon) => {
    const isDuplicatePokemon = selectedPokemon.find((p) => p.id === pokemon.id);

    return isDuplicatePokemon
      ? alert("이미 선택된 포켓몬입니다.")
      : selectedPokemon.length < 6
      ? setSelectedPokemon([...selectedPokemon, pokemon])
      : alert("최대 6마리까지 선택할 수 있습니다.");
  };

  const deletePokemon = () => {
    selectedPokemon.map((pokemon) => {
      const filteredPokemon = selectedPokemon.filter((p) => p !== pokemon);
      setSelectedPokemon(filteredPokemon);
    });
  };

  const pokemonSlots = Array(6).fill(null);

  selectedPokemon.forEach((pokemon, index) => {
    pokemonSlots[index] = pokemon;
  });

  return (
    <DexPage>
      <DashBoard
        selectedPokemon={pokemonSlots}
        addPokemon={addPokemon}
        deletePokemon={deletePokemon}
        onDetailClick={goToDetail}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        onAddPokemon={addPokemon}
        onDetailClick={goToDetail}
      />
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
console.log(MOCK_DATA);
const DexPage = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;

  animation: ${fadeIn} 0.5s ease-in-out;
`;
