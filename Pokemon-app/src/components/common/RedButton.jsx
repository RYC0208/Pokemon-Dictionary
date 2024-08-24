import React from 'react'
import styled from 'styled-components';
const PokemonButton = styled.button`
  background-color: red;
  color: white;
  border: 1px solid white;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    background-color: #b90000;
  }

  &:active {
    border: 1px solid black;
  }
`;
const RedButton = ({ text, type= "button", onClick}) => {
  return (
    <PokemonButton type={type} onClick={onClick}>
      {text}
    </PokemonButton>
  )
}

export default RedButton
