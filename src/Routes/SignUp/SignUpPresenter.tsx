import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { checkEmailChars, checkOnlyNormalChars, checkComplexPassword } from "../../utils";
import { useLazyQuery } from "@apollo/react-hooks";
import { IS_EMAIL_DUPLICATED, IS_NICKNAME_DUPLICATED } from "./SignUpQueries";
import { ToastContainer } from 'react-toastify';
import {BarLoader} from "../../Components/Loaders";
import { Link } from "react-router-dom";

const SignUpBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 700px;
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

const NoLinkMargin = styled.div`
    margin-left:8px;
`;

const JText = styled.div`

`;

const PhoneBox = styled.div`
    display:flex;
    flex-direction:row;
`;

const PhoneHyphen = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:9px;
    padding-right:9px;
`;


interface SignUpPresenterProps{
    email:any
    realName:any
    nickName:any
    password:any
    passwordAgain:any
    phoneNumber1:any
    phoneNumber2:any
    phoneNumber3:any
    clickFunc:any
    submitting:any
    checkedPrivacy:any
    setCheckedPrivacy:any
    checkedTerm:any
    setCheckedTerm:any
}


export default ({
    email,
    realName,
    nickName,
    password,
    passwordAgain,
    phoneNumber1,
    phoneNumber2,
    phoneNumber3,
    clickFunc,
    submitting,
    checkedPrivacy,
    setCheckedPrivacy,
    checkedTerm,
    setCheckedTerm,
}:SignUpPresenterProps) => {

    const emailValue = email.value;
    const realNameValue = realName.value;
    const nickNameValue = nickName.value;
    const passwordValue = password.value;
    const passwordAgainValue = passwordAgain.value;
    const phoneNumber1Value = phoneNumber1.value;
    const phoneNumber2Value = phoneNumber2.value;
    const phoneNumber3Value = phoneNumber3.value;
    
    let emailDescription = "⠀"
    let emailDescriptionColor;
    let realNameDescription = "실명을 기재하세요";
    let nickNameDescription = "공개되는 아이디(3자 이상): zerowhale.kr/u/<nickname>"
    let nickNameDescriptionColor;
    let passwordDescription = "영어와 특수문자, 숫자를 섞어서 8자 이상"
    let passwordDescriptionColor;
    let passwordAgainDescription = "⠀";
    let passwordAgainDescriptionColor;
    let phoneNumberDescription = "추후 Trust Level 인증을 위해 정확히 기재해주세요";
    let phoneNumberDescriptionColor;    
    
    let buttonDisabled = false;

    if(checkedTerm===false||checkedPrivacy===false){
        buttonDisabled = true;
    }

    const [doEmailQuery, {called:eqCalled, data:eqData, loading:eqLoading}] = useLazyQuery(IS_EMAIL_DUPLICATED, {variables:{email:emailValue}});
    const [doNickNameQuery, {called:nqcalled, data:nqData, loading:nqLoading}] = useLazyQuery(IS_NICKNAME_DUPLICATED, {variables:{nickName:nickNameValue}});
    
    email.onChange = (e:any) => {
            const {
              target: { value }
            } = e;
            email.setValue(value);
          

        doEmailQuery();
    }

    nickName.onChange = (e:any) => {
        const {
          target: { value }
        } = e;
        nickName.setValue(value);
      

    doNickNameQuery();
    }


    // email logic


    if(emailValue.length >= 6){
        if(checkEmailChars(emailValue)===false){
            emailDescription = "올바른 이메일 형식이 아닙니다";
            emailDescriptionColor = "red";
            buttonDisabled = true;
        } else {
            // 중복 검사
            
            if(!eqLoading){
                const {
                    isEmailDuplicated
                } = eqData;

                if(isEmailDuplicated===true){
                    emailDescription = "중복된 이메일입니다";
                    emailDescriptionColor = "red";
                    buttonDisabled = true;
                } else {
                    emailDescription = "적절한 이메일입니다";
                }

            }
        }

    } else {
        buttonDisabled = true;
    }


    // nickName logic
    if(nickNameValue.length >= 3){
        if(checkOnlyNormalChars(nickNameValue)===false){
            nickNameDescription = "영어와 숫자, 언더바로만 구성되어야합니다";
            nickNameDescriptionColor = "red";
            buttonDisabled = true;
        } else {
            // 중복 검사

            if(!nqLoading){
                const {
                    isNickNameDuplicated
                } = nqData;

                if(isNickNameDuplicated===true){
                    nickNameDescription = "중복된 닉네임입니다."
                    nickNameDescriptionColor = "red";
                    buttonDisabled = true;
                }

            }
        }

    } else{
        buttonDisabled = true;
    }
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
    <ToastContainer/>
    <SignUpBox>
        {submitting?
        <LoaderWrapper>
            <BarLoader/>
        </LoaderWrapper>
        :
        <>
        <SignUpTitleArea>
            <TitleBox>Start a research</TitleBox>
        </SignUpTitleArea>
        <MainArea>
            <MainComponentWrapper>
                <Input placeholder="Email Address (*)" {...email} maxLength={60}/>
                <Description color={emailDescriptionColor}>{emailDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <Input placeholder="Real name" {...realName} maxLength={36}/>
            <Description>{realNameDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <Input placeholder="Nickname (*)" {...nickName} maxLength={24}/>
                <Description color={nickNameDescriptionColor}>{nickNameDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <Input placeholder="Password (*)" {...password} type={"password"} maxLength={24}/>
                <Description color={passwordDescriptionColor}>{passwordDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <Input placeholder="Password Confirmation (*)" {...passwordAgain} type={"password"} maxLength={24}/>
                <Description color={passwordAgainDescriptionColor}>{passwordAgainDescription}</Description>
            </MainComponentWrapper>
            <MainComponentWrapper>
                <PhoneBox>
                        <Input placeholder="Input" inputWidth={"30%"} {...phoneNumber1} maxLength={3}/>
                        <PhoneHyphen>{"-"}</PhoneHyphen>
                        <Input placeholder="Mobile" inputWidth={"30%"} {...phoneNumber2} maxLength={4}/>
                        <PhoneHyphen>{"-"}</PhoneHyphen>
                        <Input placeholder="Number" inputWidth={"30%"} {...phoneNumber3} maxLength={4}/>
                </PhoneBox>
                <Description color={phoneNumberDescriptionColor}>{phoneNumberDescription}</Description>
            </MainComponentWrapper>
        </MainArea>
        <SignUpFooterArea>
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
            <Button text="Sign Up" disabled={buttonDisabled} onClick={clickFunc}/>
        </SignUpFooterArea>
        </>
        }
    </SignUpBox>
    </>)
}