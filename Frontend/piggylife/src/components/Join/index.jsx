import React from "react";
import styled from "styled-components";

class CJoin extends React.Component{
    render(){
        return(
            <Frame>
                EMAIL
                <Input placeholder="이메일을 입력해주세요"></Input>
                <EBF><EButton>이메일 인증</EButton></EBF>
                <EConfirm placeholder="인증코드 입력해주세요"></EConfirm>
                <Space></Space>
                닉네임
                <Input placeholder="닉네임"></Input>
                <Space></Space>
                PASSWORD
                <Input placeholder="비밀번호"></Input>
                <Input placeholder="비밀번호 확인"></Input>
                <Space></Space>
                <EBF><CButton>회원가입</CButton></EBF>
            </Frame>
        )
    }
}

const Space = styled.div`
    height: 2rem;
`

const Frame = styled.div`
    grid-area: "content";
    padding: 10%;
    width: 100wh;
`
const Input = styled.input`
    font-size: 1.0rem;
    margin-top: .3rem;
    width: 95%;
    padding-left: .3rem;
    background: none;
    border-color: gray;
    border-style: solid;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: none;
    border-width: 0.05rem;
    height: 2rem;
`

const EBF = styled.div`
    text-align: center;
    width: 95%;
`

const EConfirm = styled.input`
    display: none;
    font-size: 1.0rem;
    margin-top: .3rem;
    width: 95%;
    padding-left: .3rem;
    background: none;
    border-color: gray;
    border-style: solid;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: none;
    border-width: 0.05rem;
    height: 2rem;
`

const EButton = styled.button`
    margin-top: .3rem;
    width: 40%;
    height: 2rem;
    color: white;
    background: none;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    background-color: #5897A6;
`

const CButton = styled.button`
    margin-top: .3rem;
    width: 30%;
    height: 2rem;
    color: white;
    background: none;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    background-color: #5897A6;
`


export default CJoin;