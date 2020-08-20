import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import {checkEmailChars} from "../../utils"; 
import { toast, ToastContainer } from 'react-toastify';
import basicLogo from "../../images/zerowhaleBasic.png";
import {BarLoader} from "../../Components/Loaders";

const LogInBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 450px;
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


const LogInTitleArea = styled.div`
    padding-left:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const LogInFooterArea = styled.div`
    display:flex;
    flex-direction:column;
`;

const FooterBox = styled.div`
    padding:10px 0px;
    display:flex;
    justify-content:flex-end;
    a {
    color: ${props => props.theme.blueColor};
    }
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


const TitleLogo = styled.img`
    height:40px;
    margin-right:8px;
`

const LoaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

interface SignInPresenterProps{
    email:any;
    password:any;
    clickFunc:any;
    submitting:any;
}



export default ({
    email,
    password,
    clickFunc,
    submitting
}:SignInPresenterProps) => {

    const isEmailValid = checkEmailChars(email.value);
    const isPasswordValid = ((password.value).length >= 8);
    let buttonDisabled = true;
    if(isEmailValid===true && isPasswordValid===true){
        buttonDisabled = false;
    }
    console.log(submitting);
    return(<>
    <ToastContainer
    />
    <LogInBox>
        {submitting?
            <LoaderWrapper>
                <BarLoader/>
            </LoaderWrapper>
            :
            <>
            <LogInTitleArea>
                <TitleBox>{"Log in to zerowhale"}</TitleBox>
                <TitleLogo src={basicLogo}/>
            </LogInTitleArea>
            <MainArea>
                <MainComponentWrapper>
                    <Input placeholder="Email Address" {...email}/>
                </MainComponentWrapper>
                <MainComponentWrapper>
                    <Input placeholder="Password" {...password} type={"password"} onKeyDown={
                        (e:any)=>{
                            if(e.key=='Enter') {
                                e.preventDefault();
                                e.stopPropagation();
                                clickFunc(e);
                        }
                        }
                    }
                    />
                </MainComponentWrapper>
                <MainComponentWrapper>
                    <Button text="Log In" disabled={buttonDisabled} onClick={clickFunc}/>
                </MainComponentWrapper>
            </MainArea>
            <LogInFooterArea>
                <FooterBox>
                    <Link to="/sign_up">Creat Account</Link>
                </FooterBox>
                <FooterBox>
                    <Link to="/">Forgot Password?</Link>
                </FooterBox>
            </LogInFooterArea>
            </>
        }
</LogInBox>
</>)

}