import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import {checkComplexPassword} from "../../utils"; 
import { ToastContainer } from 'react-toastify';
import {BarLoader, SpinLoader} from "../../Components/Loaders";

const FormBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 400px;
    padding: 8px 20px;
    margin-top:100px;
    min-width:250px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: center;

    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;

`;


const FormTitleArea = styled.div`
    padding-left:12px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;



const MainArea = styled.div`
    display:flex;
    flex-direction:column;
    border-top: 0.1px solid #99aaaa;
    border-bottom: 0.1px solid #99aaaa;
`

const MainComponentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:10px;
    margin-bottom:10px;
    &:first-child {
        margin-top:20px
    }
    &:last-child {
        margin-bottom:20px
    }

`

const TitleBox = styled.div`
    font-weight:500;
    font-size:16px;
    color:${props => props.theme.darkgrayColor};

`;


const LoaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

interface DescriptionProps{
    color?:string;
}

const Description = styled.div<DescriptionProps>`
    color: ${prop=>prop.color?prop.color:"gray"};
    font-size:11px;
    padding: 0 15px;
`;


interface ResetPasswordBySecretPresenterProps{
    password:any;
    passwordAgain:any;
    clickFunc:any;
    submitting:any;
}


export default ({
    password,
    passwordAgain,
    clickFunc,
    submitting,
}:ResetPasswordBySecretPresenterProps) => {

    const passwordValue = password.value;
    const passwordAgainValue = passwordAgain.value;
    let buttonDisabled = false;
    let passwordDescription = "영어와 특수문자, 숫자를 섞어서 8자 이상"
    let passwordDescriptionColor;
    let passwordAgainDescription = "⠀";
    let passwordAgainDescriptionColor;

    // password logic
    if(passwordValue.length >= 8){
        if(checkComplexPassword(passwordValue)===true){
            passwordDescription = "적절한 패스워드입니다";
        } else {
            passwordDescription = "적절하지 않은 패스워드입니다";
            passwordDescriptionColor = "red";
            buttonDisabled = true;
        }
    }
    else {
        buttonDisabled = true;
    }
    if(passwordAgainValue.length >= 8){
        if(passwordValue!==passwordAgainValue){
            passwordAgainDescription = "입력한 패스워드와 같지 않습니다"
            passwordAgainDescriptionColor = "red";
            buttonDisabled = true;
        } else {
            passwordAgainDescription = "입력한 패스워드와 일치합니다"
        }
    } else {
        buttonDisabled = true;
    }

    return(<>
    <ToastContainer
    />
    <FormBox>
        {submitting?
            <LoaderWrapper>
                <SpinLoader/>
            </LoaderWrapper>
            :
            <>
            <FormTitleArea>
                <TitleBox>{"Reset your password"}</TitleBox>
            </FormTitleArea>
            <MainArea>
                <MainComponentWrapper>
                    <Input placeholder="New password" type={"password"} {...password}/>
                    <Description color={passwordDescriptionColor}>{passwordDescription}</Description>
                </MainComponentWrapper>
                <MainComponentWrapper>
                    <Input placeholder="New password again" type={"password"} {...passwordAgain} />
                    <Description color={passwordAgainDescriptionColor}>{passwordAgainDescription}</Description>
                </MainComponentWrapper>
                <MainComponentWrapper>
                    <Button text="Submit" disabled={buttonDisabled} onClick={clickFunc}/>
                </MainComponentWrapper>
            </MainArea>
            </>
        }
</FormBox>
</>)

}