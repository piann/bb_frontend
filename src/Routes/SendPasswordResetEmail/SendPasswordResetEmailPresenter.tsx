import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import {checkEmailChars} from "../../utils"; 
import { ToastContainer } from 'react-toastify';
import {BarLoader, SpinLoader} from "../../Components/Loaders";

const FormBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 300px;
    padding: 8px 20px;
    margin-top:100px;
    margin-bottom:100px;
    min-width:250px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 2fr 4fr 2fr;
    align-items: center;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        width:min(90vw, 400px);
    }
    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;

`;


const MiniFormBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    margin-top:100px;
    margin-bottom:100px;
    height: 150px;
    padding: 8px 20px;
    min-width:250px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    justify-content:center;
    align-items: center;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        width:min(95vw, 400px);
    }
    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;

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


const ResultText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height: 2em;
    white-space: pre-line;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:600;
`;


interface SendPasswordResetEmailPresenterProps{
    email:any;
    clickFunc:any;
    submitting:any;
    done:any;
}


export default ({
    email,
    clickFunc,
    submitting,
    done,
}:SendPasswordResetEmailPresenterProps) => {

    const isEmailValid = checkEmailChars(email.value);
    let buttonDisabled = true;
    if(isEmailValid===true){
        buttonDisabled = false;
    }

    return(<>
    <ToastContainer
    />
    {done?
    <MiniFormBox>
        <ResultText>{"이메일 전송이 완료되었습니다."}</ResultText>
    </MiniFormBox>
    :
    <FormBox>
        
        <>
        {submitting?
            <LoaderWrapper>
                <SpinLoader/>
            </LoaderWrapper>
            :
            <>
            <FormTitleArea>
                <TitleBox>{"Send mail to reset your password"}</TitleBox>
            </FormTitleArea>
            <MainArea>
                <MainComponentWrapper>
                    <Input placeholder="Your Email" {...email}/>
                </MainComponentWrapper>
            </MainArea>
            <Button text="Submit" disabled={buttonDisabled} onClick={clickFunc}/>
            </>
        }
        </>
</FormBox>
}
</>)

}