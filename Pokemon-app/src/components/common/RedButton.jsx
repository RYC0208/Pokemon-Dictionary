import React from "react";
import styled from "styled-components";
const RedButton = ({ text, type = "button", onClick }) => {
  return (
    <PokemonButton type={type} onClick={onClick}>
      {text}
    </PokemonButton>
  );
};

export default RedButton;

const PokemonButton = styled.button`
  background-color:  rgb(115, 197, 252);
  color: white;
  border: 1px solid white;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    background-color:#3d779e;
  }

  &:active {
    border: 1px solid black;
  }
`;
