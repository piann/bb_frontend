import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import Dropdown from "../../Components/Dropdown";

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
    z-index:3;
`;

const SubPolicyTitle = styled.text`
    font-weight:600;
    margin-bottom:50px;
`;

const SubPolicyContent = styled.text`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
`;

const InformationContent2 = styled.div`
    display:grid;
    flex-direction:column;
    grid-template-columns:50px 1fr;
`;

const LeftSpace = styled.div`
    min-height:1px;
    border-right:2px groove ${props => props.theme.snowyGrayColor};
`;

const RightSpace = styled.div`
    min-width:1px;
    height:2000px;
    display:flex;
    flex-direction:column;
`;

interface CircleProps{
    xIndex:number;
    yIndex:number;
}
const CircleContent = styled.div<CircleProps>`
  position: absolute;
  margin-left:${props => props.xIndex}px;
  margin-top:${props => props.yIndex}px;
  height: 40px;
  width: 40px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  font-size:18px;
  background-color: ${props => props.theme.blueColor};
  border-radius:50%;
  z-index:2;
`


const testOptions = [
    { value: "chocolate", label: "Ch" },
    { value: "strawberry", label: "Str" },
    { value: "vanilla", label: "Va" }
] as any;////



export default () => 
<>
<BBPBanner/>
<BBPSubMenu/>
<BBPBody>
    <BBPLeft>
        <InformationBox>
            <InformationTitle>Tips</InformationTitle>
            <InformationContent>34</InformationContent>
        </InformationBox>
        <InformationBox>
            <InformationTitle>Report</InformationTitle>
            <InformationContent2>
                <LeftSpace>
                    <CircleContent xIndex={30} yIndex={50}>1</CircleContent>
                    <CircleContent xIndex={30} yIndex={300}>2</CircleContent>
                    <CircleContent xIndex={30} yIndex={500}>3</CircleContent>
                </LeftSpace>
                <RightSpace> 1111 </RightSpace>
            </InformationContent2>
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