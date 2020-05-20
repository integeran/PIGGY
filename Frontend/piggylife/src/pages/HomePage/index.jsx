import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

class HomePage extends React.Component {
  render() {
    return (
      <Frame>
        <List>
          <Mukitlist>
            <Title>먹킷리스트</Title>
            {/* {returns ? (
              returns.map((item, index) => <Card key={index} store={item} />)
            ) : (
              <></>
            )} */}
          </Mukitlist>

          <Top10>
            <Title>이 달의 MukSpot-TOP10</Title>
            {/* {returns ? (
              returns.map((item, index) => <Card key={index} store={item} />)
            ) : (
              <></>
            )} */}
          </Top10>

          <Place>
            <Title>OOO지역에서 가볼만한 곳</Title>
            {/* {returns ? (
              returns.map((item, index) => <Card key={index} store={item} />)
            ) : (
              <></>
            )} */}
          </Place>

          <User>
            <Title>OOO님과 비슷한 먹유저들의 MukSpot</Title>
            {/* {returns ? (
              returns.map((item, index) => <Card key={index} store={item} />)
            ) : (
              <></>
            )} */}
          </User>
        </List>
        <Navbar></Navbar>
      </Frame>
    );
  }
}

const Title = styled.div``;

const Mukitlist = styled.div`
  /* background-color: #5897a6; */
`;

const Top10 = styled.div`
  /* background-color: #f28379; */
`;

const Place = styled.div`
  /* background-color: #5897a6; */
`;

const User = styled.div`
  /* background-color: #f28379; */
`;

const Frame = styled.div`
  height: 100vh;
`;
const List = styled.div`
  display: grid;
  height: 92vh;
  grid-template-areas: "Mukitlist" "Top10" "Place" "User";
  margin-left: 1rem;
  margin-top: 1rem;
`;

export default HomePage;