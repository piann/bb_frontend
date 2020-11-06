import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import {checkComplexPassword} from "../../utils"; 
import { ToastContainer } from 'react-toastify';
import {BarLoader, SpinLoader} from "../../Components/Loaders";

const FormBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 470px;
    padding: 8px 20px;
    margin-top:100px;
    min-width:250px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 3fr 10fr 1fr;
    align-items: center;

    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        max-width:93vw;
    }
`;


const FormTitleArea = styled.div`
    padding-left:8px;
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


interface EditPasswordPresenterProps{
    oldPassword:any;
    newPassword:any;
    newPasswordAgain:any;
    clickFunc:any;
    submitting:any;
}


export default ({
    oldPassword,
    newPassword,
    newPasswordAgain,
    clickFunc,
    submitting,
}:EditPasswordPresenterProps) => {

    const oldPasswordValue = oldPassword.value
    const newPasswordValue = newPassword.value;
    const newPasswordAgainValue = newPasswordAgain.value;
    let buttonDisabled = false;
    let newPasswordDescription = "영어와 특수문자, 숫자를 섞어서 8자 이상"
    let newPasswordDescriptionColor;
    let newPasswordAgainDescription = "⠀";
    let newPasswordAgainDescriptionColor;


    // oldPassword logic
    if(oldPasswordValue.length < 8){
        buttonDisabled = true;
    }

    // newPassword logic
    if(newPasswordValue.length >= 8){
        if(checkComplexPassword(newPasswordValue)===true){
            newPasswordDescription = "적절한 패스워드입니다";
        } else {
            newPasswordDescription = "적절하지 않은 패스워드입니다";
            newPasswordDescriptionColor = "red";
            buttonDisabled = true;
        }
    }
    else {
        buttonDisabled = true;
    }
    if(newPasswordAgainValue.length >= 8){
        if(newPasswordValue!==newPasswordAgainValue){
            newPasswordAgainDescription = "입력한 패스워드와 같지 않습니다"
            newPasswordAgainDescriptionColor = "red";
            buttonDisabled = true;
        } else {
            newPasswordAgainDescription = "입력한 패스워드와 일치합니다"
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
                <TitleBox>{"Edit your password"}</TitleBox>
            </FormTitleArea>
            <MainArea>
                <MainComponentWrapper>
                    <Input placeholder="Original password" type={"password"} {...oldPassword}/>
                </MainComponentWrapper>
                <MainComponentWrapper>
                    <Input placeholder="New password" type={"password"} {...newPassword}/>
                    <Description color={newPasswordDescriptionColor}>{newPasswordDescription}</Description>
                </MainComponentWrapper>
                <MainComponentWrapper>
                    <Input placeholder="New password again" type={"password"} {...newPasswordAgain} />
                    <Description color={newPasswordAgainDescriptionColor}>{newPasswordAgainDescription}</Description>
                </MainComponentWrapper>
            </MainArea>
                <MainComponentWrapper>
                    <Button text="Submit" disabled={buttonDisabled} onClick={clickFunc}/>
                </MainComponentWrapper>
            </>
        }
</FormBox>
</>)

}