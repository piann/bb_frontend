import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BasicTableBox, BasicTableTitle, BasicTableContent} from "../../Components/BasicTableElement"


const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:grid;
    grid-auto-flow: row;
    grid-column-gap:20px;
    grid-template-columns: 4fr 1fr;
`;

const BBPLeft = styled.div`
`;

const BBPRight = styled.div`
`;

const SubPolicyBox = styled.div`
    box-shadow:0 3px 7px 3px rgba(7, 7, 33, 0.1),0 1px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding:20px;
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
`;

const SubPolicyTitle = styled.text`
    font-weight:600;
    margin-bottom:50px;
`;

const SubPolicyContent = styled.text`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:1.8em;
    white-space: pre-line;
`;


export default () => 
<>
<BBPBanner/>
<BBPSubMenu/>
<BBPBody>
    <BBPLeft>
        <InformationBox>
            <InformationTitle>Introduction</InformationTitle>
            <InformationContent>34</InformationContent>
        </InformationBox>
        <InformationBox>
            <InformationTitle>Rewards</InformationTitle>
            <InformationContent>
                <BasicTableBox>
                    <BasicTableTitle> more </BasicTableTitle>
                    <BasicTableContent> 11</BasicTableContent>
                    <BasicTableContent> 11</BasicTableContent>
                    <BasicTableContent> 11</BasicTableContent>
                </BasicTableBox>
            </InformationContent>
        </InformationBox>
    </BBPLeft>
    <BBPRight>
        <SubPolicyBox>
            <SubPolicyTitle>취약점 공개 정책</SubPolicyTitle>
            <SubPolicyContent>{"해당 프로그램은 취약점 공개를 허가하지 않습니다.\n 취약점 발견 시 외부에 유출하지 마세요."}</SubPolicyContent>
        </SubPolicyBox>
        <SubPolicyBox>
            <SubPolicyTitle>운영 정보</SubPolicyTitle>
            <SubPolicyContent>{"시작, 종료일자"}</SubPolicyContent>
        </SubPolicyBox>
    </BBPRight>
</BBPBody>

</>