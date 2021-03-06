import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("storeStore")
@withRouter
@observer
class Card extends React.Component {
  render() {
    const info=this.props.store;
    const Register = (e) => {
      e.preventDefault();
      this.props.history.push("/adminR/"+info.urId);
    };

    const Delete = (e) => {
        e.preventDefault();
        this.props.storeStore.Requestdelete(info.urId)
      };

    return (
      <F>
        <Frame onClick={Register}>  
            <CF>
            <T>가게 이름 : {info.name}</T> 
            <T>가게 주소 : {info.address}</T> 
            <T>등록자 : {info.user.nickname}</T>
            </CF>
        </Frame>
        <Close onClick={Delete}>삭제</Close>
      </F>
    );
  }
}

const F = styled.div`
  border: 1px solid black; 
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-areas: "content close";
  width: 97%;
  height: 100%;
  overflow: hidden;
  border-radius: .5rem;
  justify-content: center;
  align-items: center;
  padding-right: .5rem;
`;

const CF = styled.div`
    text-align: left;
    grid-area: content;
`

const Frame = styled.button`
  background: none;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const T = styled.div`
  white-space: pre-line;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: 1.2rem;
`;

const Close = styled.button`
    background: none;
    height: 40%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #F28379;
    border-radius: .5rem;
`

export default Card;
