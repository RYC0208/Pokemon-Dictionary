# 포켓몬 도감

<div style="display: flex; justify-content: space-around;">
  <img src="https://github.com/user-attachments/assets/5104120e-37a8-42db-af6d-39013b602a07" alt="Home" style="width: 30%;"/>
  <img src="https://github.com/user-attachments/assets/fd8348d6-c5a6-4b56-a7a3-e51d40ea54cd" alt="DashBoard" style="width: 30%;"/>
  <img src="https://github.com/user-attachments/assets/b5c00066-db8b-48c5-862a-0bedc0c293d3" alt="Detail" style="width: 30%;"/>
</div>


포켓몬 데이터를 활용하여 리스트에 있는 포켓몬을 대쉬보드에 추가하여 

나만의 포켓몬 컬렉션을 만들고 각 포켓몬의 정보를 상세페이지에서 확인할 수 있습니다.






### 컴포넌트 및 페이지 구조


```plaintext
src/
├── pages/
│   ├── Home.jsx
│   ├── Detail.jsx
│   └── Dex.jsx
├── components/
│   │   ├── DashBoard.jsx
│   │   ├── PokemonList.jsx
│   │   └── PokemonCard.jsx
├── contexts/
│   └── PokemonContext.jsx
```




### 프로젝트 느낀점


해당 프로젝트를 진행하면서 props drilling의 비효율성과 

React Router Dom, styled components의 대한 지식과 활용법

그리고 기능에 대한 코드 작성 및 컴포넌트를 구성하는 방법을 배울 수 있었습니다.



RTK까지 적용하였으면 더 좋은 프로젝트가 되었을 태지만

해당 과제를 통해 Context API 까지만 내 것으로 만들어도 충분하다고 판단하여

리팩토링 하지 않았습니다 시간이 생긴다면 RTK로 리팩토링 하는 과정까지 기록해보겠습니다 !!
