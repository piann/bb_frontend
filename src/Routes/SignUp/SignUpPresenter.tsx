import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const SignUpBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 600px;
    padding: 8px 20px;
    margin: 20px;
    margin-top:100px;
    min-width:250px;
    width: 400px;

    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 5fr 1fr;
    align-items: center;

    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;
`;


const SignUpTitleArea = styled.div`
    padding-left:10px;
`;

const SignUpFooterArea = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    margin-bottom:20px;
`;

const FooterBox = styled.div`
    padding:10px 0px;
    display:flex;
    justify-content:flex-end;
` 



const MainArea = styled.div`
    display:flex;
    flex-direction:column;
    border-top: 0.1px solid #99aaaa;
    border-bottom: 0.1px solid #99aaaa;
`

const MainComponentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:25%;
    margin-top:5px;
    margin-bottom:5px;
    &:first-child {
        margin-top:20px;
    }
    &:last-child {
        margin-bottom:20px
    }

`


const TitleBox = styled.div`
    font-weight:500;
    font-size:16px;
    color:${props => props.theme.darkgray};
`

const Description = styled.text`
    color: gray;
    font-size:11px;
    padding: 0 15px;
`



export default () => <SignUpBox>
    <SignUpTitleArea>
        <TitleBox>Start a research</TitleBox>
    </SignUpTitleArea>
    <MainArea>
        <MainComponentWrapper>
            <Input placeholder="Email Address (*)"/>
            <Description>{" "}</Description>
        </MainComponentWrapper>
        <MainComponentWrapper>
            <Input placeholder="Real Name"/>
            <Description>실명을 기재하세요. (생략가능)</Description>
        </MainComponentWrapper>
        <MainComponentWrapper>
            <Input placeholder="Nick Name (*)"/>
            <Description>{"타 사용자에게 노출되는 아이디. zerowhale.kr/<nickName>"}</Description>
        </MainComponentWrapper>
        <MainComponentWrapper>
            <Input placeholder="Password (*)"/>
            <Description>패스워드 규칙은 이것이다</Description>
        </MainComponentWrapper>
        <MainComponentWrapper>
            <Input placeholder="Password Confirmation (*)"/>
            <Description>Warning</Description>
        </MainComponentWrapper>
    </MainArea>
    <SignUpFooterArea>
        <Button text="Sign Up"/>
    </SignUpFooterArea>
</SignUpBox>