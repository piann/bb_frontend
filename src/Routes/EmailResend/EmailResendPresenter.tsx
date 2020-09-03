import React from "react";
import styled from "styled-components";
import {BarLoader} from "../../Components/Loaders"
import Button from "../../Components/Button";
import { ToastContainer } from "react-toastify";

const LoaderWrapper = styled.div`
    display:flex;
    width:100%;
    margin-top:150px;
    justify-content:center;
    align-items:center;
`;


const InfoBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: 205px;
    padding-top:25px;
    padding-bottom:10px;
    padding-left:20px;
    padding-right:20px;
    margin-top:100px;
    min-width:250px;
    width: 480px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;

`;


const InfoText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:50px;
`;

export default ({
    clickFunc,
    loading,
    buttonDisabled
}: any) => (
<>
<ToastContainer/>
{loading?
<LoaderWrapper>
<BarLoader/>
</LoaderWrapper>
:
<InfoBox>
    <InfoText>{"이메일 인증이 완료되지 않았습니다. 메일을 재전송하시겠습니까?"}</InfoText>
    <Button text={"Send"} width={"100px"} onClick={clickFunc} disabled={buttonDisabled}/>
</InfoBox>
}
</>
)