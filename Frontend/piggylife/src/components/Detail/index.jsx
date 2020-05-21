import React from "react";
import styled from "styled-components";

class Detail extends React.Component{
    render(){
        return(
            <Frame>
                <Pic>사진</Pic>
                <Info>정보</Info>
                <Menu>메뉴</Menu>
                <Map>지도</Map>
                <Tag>태그</Tag>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, auto);
    grid-template-areas: "pic" "info" "menu" "map" "tag";
`
const Pic = styled.div`
    grid-area: "pic";
    margin-top: .5rem;
    height: 10rem;
`

const Info = styled.div`
    grid-area: "info";
    margin-top: .5rem;
    height: 5rem;
`

const Menu = styled.div`
    grid-area: "menu";
    margin-top: .5rem;
    height: 5rem;
`

const Map = styled.div`
    grid-area: "map";
    margin-top: .5rem;
    height: 10rem;
`

const Tag = styled.div`
    grid-area: "tag";
    margin-top: .5rem;
    height: 5rem;
`


export default Detail;