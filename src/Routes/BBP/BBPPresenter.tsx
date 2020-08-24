import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BasicTableBox, BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import {dateStringToDotFormat, generateRandomStr} from "../../utils";

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

const InfoText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:8px;
`;

const MiniTitleText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    font-weight:600;
    font-size:16px;
    margin-bottom:30px;

`

interface marginProps{
    marginLeft:number;
    marginRight:number;
}


const TableContentWrapper = styled.div`
    width:100%;
    display:grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
`;


const TableContentWrapperWithRatio = styled.div`
    width:100%;
    display:grid;
    grid-auto-flow: row;
    grid-template-columns: 2fr 5fr;
`;

const TableText = styled.div<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
`;

const elements = ['이런 것을 이렇게 해야한다', '저렇게 이렇게 꼭 해야한다', '이런 것을 알아야한다.'];////
const testTargetObjList = [{type:"WEB", value:"https://starbucks.com"},{type:"WEB", value:"https://api.starbucks.com"} ]////;

export default ({
nameId,
loading,
disclosurePolicy,
introduction,
ruleValueList,
openDate,
closeDate,
lowPriceMin,
lowPriceMax,
mediumPriceMin,
mediumriceMax,
highPriceMin,
highriceMax,
fatalPriceMin,
fatalPriceMax,
inScopeTargetList,
outOfScopeTargetList,
exclusionValueList,
}:any) => 
<>
<BBPBanner nameId={nameId}/>
<BBPSubMenu menuIdx={1} nameId={nameId}/>
<BBPBody>
{loading?<></>:
    <>
    <BBPLeft>
        <InformationBox>
            <InformationTitle>Introduction</InformationTitle>
            <InformationContent>
                <InfoText>
                    {introduction}
                </InfoText>
                <MiniTitleText>{"\nRules"}</MiniTitleText>
                    {ruleValueList.map((value:any, index:any) => {
                         return <InfoText key={1000+index}>{"⚬  "}{value}</InfoText>
                    })}
                <InfoText>
                    {"\n그 외의 참고사항은 다음과 같습니다.\n"}
                    {"\n같은 이슈로 인한 취약점은 동일 취약점으로 취급합니다. 이러한 경우 먼저 제보된 취약점만 인정됩니다. "}
                    {"기업 측에서 취약점에 대해 쉽게 이해할 수 있도록 노력해주시고, 취약점을 재현할 수 있도록 충분한 시간을 할애해주세요"}     
                </InfoText>
            </InformationContent>
        </InformationBox>
        {/* second area start */}
        <InformationBox>
            <InformationTitle>Details</InformationTitle>
            <InformationContent>
            <MiniTitleText>{"Reward"}</MiniTitleText>
                <BasicTableBox>
                    <BasicTableHead>
                        <TableContentWrapper>
                            <TableText marginLeft={20} marginRight={0}>Grade</TableText>
                            <TableText marginLeft={0} marginRight={70}>Range</TableText>
                        </TableContentWrapper>
                    </BasicTableHead>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={0} marginRight={0}>⚫  Fatal</TableText>
                            <TableText marginLeft={0} marginRight={0}>{"₩"}{fatalPriceMin}{" ~ "}{"₩"}{fatalPriceMax}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={0} marginRight={0}>🔴  High</TableText>
                            <TableText marginLeft={0} marginRight={0}>{"₩"}{highPriceMin}{" ~ "}{"₩"}{highriceMax}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={0} marginRight={0}>🟠  Medium</TableText>
                            <TableText marginLeft={0} marginRight={0}>{"₩"}{mediumPriceMin}{" ~ "}{"₩"}{mediumriceMax}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={0} marginRight={0}>🟡  Low</TableText>
                            <TableText marginLeft={0} marginRight={0}>{"₩"}{lowPriceMin}{" ~ "}{"₩"}{lowPriceMax}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                </BasicTableBox>

                <MiniTitleText>{"\nIn Scope"}</MiniTitleText>
                <BasicTableBox>
                    <BasicTableHead>
                        <TableContentWrapperWithRatio>
                            <TableText marginLeft={20} marginRight={0}>Type</TableText>
                            <TableText marginLeft={0} marginRight={70}>Target</TableText>
                        </TableContentWrapperWithRatio>
                    </BasicTableHead>
                    
                    
                    {inScopeTargetList.map((dictObj:any, index:any) => {
                         return (<BasicTableContent key={2000+index}>
                             <TableContentWrapperWithRatio>
                                 <TableText key={3000+index} marginLeft={22} marginRight={0}>{dictObj.type}</TableText>
                                 <TableText key={4000+index} marginLeft={0} marginRight={0}>{dictObj.value}</TableText>
                             </TableContentWrapperWithRatio>
                         </BasicTableContent>)
                    })}
                    
                </BasicTableBox>

                <MiniTitleText>{"\nOut Of Scope"}</MiniTitleText>
                <BasicTableBox>
                    <BasicTableHead>
                        <TableContentWrapperWithRatio>
                            <TableText marginLeft={20} marginRight={0}>Type</TableText>
                            <TableText marginLeft={0} marginRight={70}>Target</TableText>
                        </TableContentWrapperWithRatio>
                    </BasicTableHead>
                    
                    
                    {outOfScopeTargetList.map((dictObj:any, index:any) => {
                         return (<BasicTableContent key={5000+index}>
                             <TableContentWrapperWithRatio>
                                 <TableText key={5000+index} marginLeft={22} marginRight={0}>{dictObj.type}</TableText>
                                 <TableText key={6000+index} marginLeft={0} marginRight={0}>{dictObj.value}</TableText>
                             </TableContentWrapperWithRatio>
                         </BasicTableContent>)
                    })}
                    
                </BasicTableBox>

                <MiniTitleText>{"\nExclusion List"}</MiniTitleText>
                    {exclusionValueList.map((value:any, index:any) => {
                         return <InfoText key={7000+index}>{"⚬  "}{value}</InfoText>
                    })}

            </InformationContent>
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
    </>}
</BBPBody>

</>