import React from "react";
import styled from "styled-components";

// 스타일드 컴포넌트
const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.767);
`;
const DashBoardTitle = styled.h2`
  color: #ff0000;
`;
const DashBoardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;
const DashBoardItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dotted rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

`;
const DashBoardPokeball = styled.img`
  width: 50px;
  height: 50px;
`;
const DeleteButton = styled.button`
    position: relative;
    top: -75px;
    left: 38px;
    border: none;
    width: 20px;
    height: 20px;
    color: white;
    font-weight: bold;
    background-color: red;
    border-radius: 5px;
    cursor: pointer;
`;

const DashBoard = ({ selectedPokemon }) => {
    //fill 메소드 배열의 요소들을 value로 채움
    // 매개변수는 value, start, end
    // 만약 5의 값으로 0번 째 인덱스부터 3번 째 인덱스까지 채우고 싶으면
    // fill(5, 0, 3)으로 설정하면 됨
    const pocketSlots = Array(6).fill(null);

    selectedPokemon.forEach((pokemon, index) => {
      if (index < pocketSlots.length) {
        pocketSlots[index] = pokemon;
      }
    });
  
    return (
      <DashBoardContainer>
        <DashBoardTitle>나의 포켓몬</DashBoardTitle>
        <DashBoardGroup>
          {pocketSlots.map((pokemon, index) => (
            <DashBoardItem key={index}>
              {pokemon ? (
                  <div>
                  <img src={pokemon.img_url} alt={pokemon.korean_name} width="50" height="50" />
                  <div>{pokemon.korean_name}</div>
                      <DeleteButton>X</DeleteButton> 
                </div>
              ) : (
                <DashBoardPokeball src="/img/pokeball.png" alt="포켓볼" />
              )}
            </DashBoardItem>
          ))}
        </DashBoardGroup>
      </DashBoardContainer>
    );
};

export default DashBoard;
