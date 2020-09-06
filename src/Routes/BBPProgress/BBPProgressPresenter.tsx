import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BasicTableBox, BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import {BarLoader} from "../../Components/Loaders";
import { Redirect } from "react-router-dom";
import { getTimeGapStr } from "../../utils";
import {statusDict} from "../../common";


const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:flex;
    flex-direction:column;
`;

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

const GridWrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-rows:repeat(4, 1fr);
    grid-template-columns: 1fr 1fr;
`;

const GridContent = styled.div`
    height:80px;
    display:grid;
    grid-template-rows:1fr 1fr;
    margin-bottom:10px;
`;

interface marginProps{
    marginLeft:number;
    marginRight:number;
}



const TableContentWrapperWithRatio = styled.a`
    width:100%;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: 3fr 2fr 2fr 2.5fr;
    color:inherit;
    text-decoration: none;
`;

const TableText = styled.div<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    display:flex;
    justify-content:center;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
`;

const CenteredText = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:20px;
`;
/*
const elements = ['이런 것을 이렇게 해야한다', '저렇게 이렇게 꼭 해야한다', '이런 것을 알아야한다.'];////
const testTargetObjList = [
    {
      reportId: "ckdd2g2au0006a1p4donly56g",
      authorNickName: "babubabapplebannanke",
      status: "0",
      result: null
    },
    {
        reportId: "ckdd2g2au0006a1p4donly56g",
        authorNickName: "jtjisGod",
        status: "0",
        result: null
      }
  ] 
*/

export default ({
    loading,
    responseSuccess,
    nameId,
    submittedReportCount,
    totalVulnerabilityCount,
    rewardedVulnerabilityCount,
    totalReward,
    joinedHackerCount,
    closeDate,
    openDate,
    firstReportDate,
    recentReportDate,
    reportInfoList,
}:any) =>{

    let 
    GapAfterStart,
    FirstReportGap,
    lastReportGap;
    
    if(loading===false){
        GapAfterStart = getTimeGapStr(openDate, new Date());
        FirstReportGap = getTimeGapStr(openDate, firstReportDate);
        lastReportGap = getTimeGapStr(recentReportDate, new Date());
    }

    return(
    <>
    <BBPBanner hideButton={true} nameId={nameId}/>
    <BBPSubMenu nameId={nameId}/>
    <BBPBody>
        {loading===false&&responseSuccess===false&&<Redirect to={"/"}/>}
        {loading?<BarLoader/>:
            <>
            <InformationBox>
                <InformationTitle>{"Summary"}</InformationTitle>
                <InformationContent>
                    <GridWrapper>
                        <GridContent>
                            <BoldInfoText>{"총 제출 리포트 수 :"}</BoldInfoText>
                            <InfoText>{submittedReportCount}</InfoText>
                        </GridContent>
                        <GridContent>
                            <BoldInfoText>{"시작 후 경과 시간 :"}</BoldInfoText>
                            <InfoText>{GapAfterStart}</InfoText>
                        </GridContent>
                        <GridContent>
                            <BoldInfoText>{"발견된 취약점 수 :"}</BoldInfoText>
                            <InfoText>{totalVulnerabilityCount}</InfoText>
                        </GridContent>
                        <GridContent>
                            <BoldInfoText>{"총 참가 해커 수 :"}</BoldInfoText>
                            <InfoText>{joinedHackerCount}</InfoText>
                        </GridContent>
                        <GridContent>
                            <BoldInfoText>{"보상 인정 취약점 수 :"}</BoldInfoText>
                            <InfoText>{rewardedVulnerabilityCount}</InfoText>
                        </GridContent>
                        <GridContent>
                            <BoldInfoText>{"최초 레포트 제출 시기 :"}</BoldInfoText>
                            <InfoText>{"시작 후 "}{FirstReportGap}</InfoText>
                        </GridContent>
                        <GridContent>
                            <BoldInfoText>{"총 지불 포상금 :"}</BoldInfoText>
                            <InfoText>{"₩"}{totalReward}</InfoText>
                        </GridContent>
                        <GridContent>
                            <BoldInfoText>{"최근 레포트 제출 시점 :"}</BoldInfoText>
                            <InfoText>{lastReportGap}{" 전"}</InfoText>
                        </GridContent>
                    </GridWrapper>
                </InformationContent>
            </InformationBox>





            <InformationBox>
                <InformationTitle>Reports</InformationTitle>
                <InformationContent>
                    {submittedReportCount===0?
                    <CenteredText>{"아직 제출된 리포트가 없습니다"}</CenteredText>:
                    <BasicTableBox>
                        <BasicTableHead>
                            <TableContentWrapperWithRatio>
                                <TableText marginLeft={0} marginRight={0}>report id</TableText>
                                <TableText marginLeft={0} marginRight={0}>status</TableText>
                                <TableText marginLeft={0} marginRight={0}>result</TableText>
                                <TableText marginLeft={0} marginRight={0}>by hacker</TableText>
                            </TableContentWrapperWithRatio>
                        </BasicTableHead>
                        {reportInfoList.map((dictObj:any, index:any) => {
                            return (<BasicTableContent key={1000+index}>
                                <TableContentWrapperWithRatio href={"/report_thread/"+dictObj.reportId}>
                                    <TableText marginLeft={0} marginRight={0}>{dictObj.reportId}</TableText>
                                    <TableText marginLeft={0} marginRight={0}>{statusDict[dictObj.status]}</TableText>
                                    <TableText marginLeft={0} marginRight={0}>{dictObj.result?dictObj.result:"-"}</TableText>
                                    <TableText marginLeft={0} marginRight={0}>{dictObj.authorNickName}</TableText>
                                </TableContentWrapperWithRatio>
                            </BasicTableContent>)
                        })}
                    </BasicTableBox>
                }
                </InformationContent>
            </InformationBox>
            </>
        }
    </BBPBody>

    </>
    )
}