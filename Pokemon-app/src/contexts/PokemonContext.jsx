import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const pokemonSlots = Array(6).fill(null);
  selectedPokemon.forEach((pokemon, index) => {
    pokemonSlots[index] = pokemon;
  });

  const addPokemon = (pokemon) => {
    const isDuplicate = selectedPokemon.find((p) => p.id === pokemon.id);
    if (isDuplicate) {
      alert("이미 선택된 포켓몬입니다.");
    } else if (selectedPokemon.length < 6) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
      alert("최대 6마리까지 선택할 수 있습니다.");
    }
  };

  const deletePokemon = (pokemonId) => {
    setSelectedPokemon((pokemon) => pokemon.filter((p) => p.id !== pokemonId));
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonSlots, addPokemon, deletePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
