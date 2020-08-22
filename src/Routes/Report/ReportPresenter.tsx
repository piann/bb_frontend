import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import Dropdown from "../../Components/Dropdown";
import TextArea from "../../Components/TextArea";
import Input from "../../Components/Input";
import {BarLoader} from "../../Components/Loaders";
import { dateStringToDotFormat } from "../../utils";

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

const SubPolicyTitle = styled.div`
    font-weight:600;
    margin-bottom:50px;
`;

const SubPolicyContent = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:1.8em;
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
    padding-left:40px;
    padding-right:25px;
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
const InfoText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:8px;
`;

const BoldInfoText = styled(InfoText)`
    font-weight:600;
`;

const TextInputSetWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

const InputLeftText = styled.div`
    width:70px;
    font-weight:600;
`



const MiniTitleText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    font-weight:600;
    font-size:16px;
    margin-bottom:30px;

`


const testOptions = [
    { value: "chocolate", label: "Cross-Site Scripting (XSS) From Earth" },
    { value: "strawberry", label: "SQL Injection" },
    { value: "vanilla", label: "Remote Code Injection" }
] as any;////


const testTips = [
    "보고서는 1항을 지켜서 써야한다",
    "보고서는 2항을 지켜서 제보해야한다 등등",
    "보고서는 3항을 지켜서 제보해야한다 등등",
    "보고서는 4항을 지켜서 제보해야한다 등등",
]; ////

export default ({
    loading,
    nameId,
    reportTipList,
    disclosurePolicy,
    vulnerabilityList,
    openDate,
    closeDate,
    inScopeTargetList,
}:any) => 
<>
<BBPBanner hideButton={true} nameId={nameId}/>
<BBPSubMenu/>
<BBPBody>
    {loading?<></>:
    <>
    <BBPLeft>
        <InformationBox>
            <InformationTitle>Tips</InformationTitle>
            <InformationContent>
                {reportTipList.map((value:any, index:any) => {
                         return <InfoText key={index}>{"⚬  "}{value}</InfoText>
                })}
            </InformationContent>
        </InformationBox>
        <InformationBox>
            <InformationTitle>Report</InformationTitle>
            <InformationContent2>
                <LeftSpace>
                    <CircleContent xIndex={30} yIndex={29}>1</CircleContent>
                    <CircleContent xIndex={30} yIndex={290}>2</CircleContent>
                    <CircleContent xIndex={30} yIndex={520}>3</CircleContent>
                    <CircleContent xIndex={30} yIndex={780}>4</CircleContent>
                </LeftSpace>
                <RightSpace>
                    <MiniTitleText>{"\nAsset"}</MiniTitleText>
                    <InfoText>{"취약점이 발견된 대상을 선택하세요\n\n"}</InfoText>
                    <Dropdown options={inScopeTargetList} defaultValue={inScopeTargetList[0].options[0]}/>


                    <MiniTitleText>{"\n\n"}{"\nVulnerability"}</MiniTitleText>
                    <InfoText>{"발견된 취약점에 가장 부합하는 취약점 유형을 선택하세요\n\n"}</InfoText>
                    <Dropdown options={vulnerabilityList} defaultValue={vulnerabilityList[0].options[0]}/>


                    <MiniTitleText>{"\n\n"}{"Impact"}</MiniTitleText>
                    <InfoText>{"발견된 취약점을 스스로 평가해주세요 (생략가능)\n\n"}</InfoText>
                    

                    <MiniTitleText>{"\n\n\n"}{"Details"}</MiniTitleText>
                    <InfoText>{"어떻게 해당 취약점을 재현할 수 있는지와 어떻게 취약점을 발견하게 되었는지 최대한 자세하게 기술해주세요.\n\n"}</InfoText>
                    <BoldInfoText>{"Title"}</BoldInfoText>
                    <InfoText>{"발견 취약점에 대해 간단한 요약, 제목 (50자 이내)"}</InfoText>
                    <Input maxLength={50}/>
                    
                    <BoldInfoText>{"\n\n"}{"URL or Location Of Vulnerability"}</BoldInfoText>
                    <InfoText>{"취약점 발생 URL을 적어주세요 (생략 가능)"}</InfoText>
                    <Input maxLength={250}/>

                    <BoldInfoText>{"\n\n"}{"Enviroment"}</BoldInfoText>
                    <InfoText>{"취약점을 시현했던 OS와 Browser, Browser version (생략 가능)"}</InfoText>
                        <TextInputSetWrapper>
                            <InputLeftText>{"OS"}</InputLeftText>
                            <Input maxLength={30} inputWidth={"50%"}/>
                        </TextInputSetWrapper>
                        <TextInputSetWrapper>
                            <InputLeftText>{"Browser"}</InputLeftText>
                            <Input maxLength={30} inputWidth={"50%"}/>
                        </TextInputSetWrapper>
                        <TextInputSetWrapper>
                            <InputLeftText>{"Version"}</InputLeftText>
                            <Input maxLength={30} inputWidth={"50%"}/>
                        </TextInputSetWrapper>
                        <BoldInfoText>{"\n\n\n"}{"Description"}</BoldInfoText>
                            <InfoText>
                                {"1. 어떻게 취약점을 발견하게 되었는지 그 경위를 기술해주세요."}
                                {"\n2. 취약점을 재현할 수 있는 방법을 단계별로 기술해주세요."}
                                {"\n(총 10000자 이하)"}
                            </InfoText>
                            <TextArea rows={20} maxLength={10000}/>


                            <BoldInfoText>{"\n\n\n"}{"HTTP request dump"}</BoldInfoText>
                            <InfoText>
                                {"공격 관련 request 정보 (최대 20000자, 생략 가능)"} 
                            </InfoText>
                            <TextArea rows={20} maxLength={10000}/>

                            <BoldInfoText>{"\n\n\n"}{"비고"}</BoldInfoText>
                            <InfoText>
                                {"이 외 알리고 싶은 기타 내용 (최대 300자, 생략 가능)"} 
                            </InfoText>
                            <TextArea rows={5} maxLength={10000}/>

                            <BoldInfoText>{"\n\n\n"}{"파일 첨부"}</BoldInfoText>


             </RightSpace>
            </InformationContent2>
        </InformationBox>
    </BBPLeft>
    <BBPRight>
    <SubPolicyBox>
            <SubPolicyTitle>{"취약점 공개 정책"}</SubPolicyTitle>
            <SubPolicyContent>{disclosurePolicy}</SubPolicyContent>
        </SubPolicyBox>
        <SubPolicyBox>
            <SubPolicyTitle>{"운영 정보"}</SubPolicyTitle>
            <SubPolicyContent>{"시작 :"}</SubPolicyContent>
            <SubPolicyContent>{openDate?dateStringToDotFormat(openDate):"-"}</SubPolicyContent>
            <SubPolicyContent>{"\n"}</SubPolicyContent>
            <SubPolicyContent>{"종료 :"}</SubPolicyContent>
            <SubPolicyContent>{closeDate?dateStringToDotFormat(closeDate):"⠀-⠀"}</SubPolicyContent>
        </SubPolicyBox>
    </BBPRight>
    </>
    }
</BBPBody>

</>