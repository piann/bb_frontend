import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { checkEmailChars, checkPhoneNumber } from "../../utils";
import { BarLoader } from "../../Components/Loaders";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { toastOpt } from "../../common";

const SignUpBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 712px;
    padding: 8px 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top:100px;
    margin-bottom:100px;
    min-width:250px;
    width: 400px;

    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 5fr 1fr;
    align-items: center;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        width:min(95vw, 400px);
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


const SignUpTitleArea = styled.div`
    padding-left:10px;
`;

const SignUpFooterArea = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    margin-bottom:20px;
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
    color:${props => props.theme.darkgrayColor};
`

interface DescriptionProps{
    color?:string;
}

const Description = styled.div<DescriptionProps>`
    color: ${prop=>prop.color?prop.color:"gray"};
    font-size:11px;
    padding: 0 15px;
`

const TotalDescription = styled.div<DescriptionProps>`
    color: ${prop=>prop.color?prop.color:"gray"};
    font-size:11px;
    padding: 0 15px;
    margin-bottom: 15px;
`


const LoaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;


const CheckBoxRow = styled.div`
    margin-bottom:12px;
    display:flex;
    align-items:center;
    font-size:11px;
`;

const SLink = styled(Link)`
    margin-left:8px;
    color:blue;
`;

const JText = styled.div`

`;

const EmptySpace = styled.div`
    margin-bottom: 10px;
`;

const FileInputArea = styled.div`
margin-top:10px;
margin-bottom:10px;
`;


interface SignUpPresenterProps{
    email:any
    realName:any
    companyName:any
    jobTitle:any
    phone:any
    companyImage:any
    clickFunc:any
    submitting:any
    checkedPrivacy:any
    setCheckedPrivacy:any
    checkedTerm:any
    setCheckedTerm:any
    setButtonDisabled:any
    done:any
}


export default ({
    email,
    realName,
    companyName,
    jobTitle,
    phone,
    clickFunc,
    submitting,
    checkedPrivacy,
    setCheckedPrivacy,
    checkedTerm,
    setCheckedTerm,
    done

}:SignUpPresenterProps) => {

    const emailValue = email.value;
    const phoneValue = phone.value;
    
    let emailDescription = "⠀"
    let emailDescriptionColor;
    let companyNameDescription = " ";
    let companyNameDescriptionColor;
    let realNameDescription = "실명을 기재하세요";
    let jobTitleDescription = "직위를 기재하세요";
    let jobTitleDescriptionColor;
    let phoneDescription = "-(하이픈)기호를 포함";
    let phoneDescriptionColor;
    
    let buttonDisabled = false;

    if(checkedTerm===false||checkedPrivacy===false){
        buttonDisabled = true;
    }

    // email logic
    if(emailValue.length >= 6){
        if(checkEmailChars(emailValue)===false){
            emailDescription = "올바른 이메일 형식이 아닙니다";
            emailDescriptionColor = "red";
            buttonDisabled = true;
        } else {
            emailDescription = "적절한 이메일입니다";
        }

    } else {
        buttonDisabled = true;
    }


        // phone logic
        if(phoneValue.length >= 6){
            if(checkPhoneNumber(phoneValue)===false){
                phoneDescription = "올바른 전화번호 형식이 아닙니다.";
                phoneDescriptionColor = "red";
                buttonDisabled = true;
            } else {
                phoneDescription = "적절한 전화번호입니다";
            }
    
        } else {
            buttonDisabled = true;
        }

    
    return(<>
    <ToastContainer/>
    {done?
    <MiniFormBox>
        <ResultText>{"이메일 전송이 완료되었습니다."}</ResultText>
    </MiniFormBox>
    :
    <SignUpBox>
        {submitting?
        <LoaderWrapper>
            <BarLoader/>
        </LoaderWrapper>
        :
        <>
        <SignUpTitleArea>
            <TitleBox>Make your business secure</TitleBox>
        </SignUpTitleArea>
        <MainArea>
            <MainComponentWrapper>
                <Input placeholder="Business Email Address (*)" {...email} maxLength={60}/>
                <Description color={emailDescriptionColor}>{emailDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <Input placeholder="Company name (*)" {...companyName} maxLength={24}/>
                <Description color={companyNameDescriptionColor}>{companyNameDescription}</Description>
            </MainComponentWrapper>
            <EmptySpace />
            <MainComponentWrapper>
                <Input placeholder="Real name" {...realName} maxLength={36}/>
            <Description>{realNameDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <Input placeholder="Job title" {...jobTitle} maxLength={24}/>
                <Description color={jobTitleDescriptionColor}>{jobTitleDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <Input placeholder="Phone number" {...phone} maxLength={24}/>
                <Description color={phoneDescriptionColor}>{phoneDescription}</Description>
            </MainComponentWrapper>

        </MainArea>
        <SignUpFooterArea>
            <TotalDescription>
                zerowhale에서 계정을 생성해 메일로 보내드립니다.
            </TotalDescription>
            <TotalDescription>
                상단의 정보를 적어 zerowhale에 보내주세요.
            </TotalDescription>
            <EmptySpace />
            <CheckBoxRow>
                <input type="checkbox" name="color" onChange={(e)=>setCheckedPrivacy(e.target.checked)}/>
                <SLink to="/privacy" target="_blank">{"개인정보 수집•이용"}</SLink>
                <JText>{"에 동의합니다 (필수)"}</JText>
            </CheckBoxRow>
            <CheckBoxRow>
                <input type="checkbox" name="color" onChange={(e)=>setCheckedTerm(e.target.checked)}/>
                <SLink to="/terms_of_service" target="_blank">{"서비스 이용약관"}</SLink>
                <JText>{"에 동의합니다 (필수)"}</JText>
            </CheckBoxRow>
            <EmptySpace />
            <Button text="Submit" disabled={buttonDisabled} onClick={clickFunc}/>
        </SignUpFooterArea>
        </>
        }
    </SignUpBox>
    }
    </>)
}