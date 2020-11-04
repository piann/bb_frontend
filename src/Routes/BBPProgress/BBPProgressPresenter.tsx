import React from "react";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BasicTableBox, BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import {BarLoader} from "../../Components/Loaders";
import { Redirect } from "react-router-dom";
import { getTimeGapStr, addCommaForMoney } from "../../utils";
import {statusDict} from "../../common";


const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size:13px;
    }
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
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        grid-template-columns: 1fr 3fr 2.5fr 3fr;
    }
`;

const TableText = styled.div<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    display:flex;
    justify-content:flex-start;
    white-space: pre-line;
    align-items: center;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
    font-size:12px;
`;

const TruncatedTableText = styled(TableText)`
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
`

const CenteredText = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:20px;
`;

const LoaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:100px;
    width:100%;
`;

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
    reportInfoList
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
        {loading?
        <LoaderWrapper>
            <BarLoader/>
        </LoaderWrapper>
        :
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
                            <InfoText>{"₩"}{addCommaForMoney(totalReward)}</InfoText>
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
                    window.innerWidth>700?
                        // for desktop
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
                                        <TableText marginLeft={0} marginRight={0}>{dictObj.result?dictObj.result:"⋯"}</TableText>
                                        <TableText marginLeft={0} marginRight={0}>{dictObj.authorNickName}</TableText>
                                    </TableContentWrapperWithRatio>
                                </BasicTableContent>)
                            })}
                        </BasicTableBox>
                        :
                        // for mobile
                        <BasicTableBox>
                            <BasicTableHead>
                                <TableContentWrapperWithRatio>
                                    <TableText marginLeft={7} marginRight={2}>#</TableText>
                                    <TableText marginLeft={0} marginRight={3}>status</TableText>
                                    <TableText marginLeft={0} marginRight={4}>result</TableText>
                                    <TableText marginLeft={0} marginRight={0}>from</TableText>
                                </TableContentWrapperWithRatio>
                            </BasicTableHead>
                            {reportInfoList.map((dictObj:any, index:any) => {
                                return (<BasicTableContent key={1000+index}>
                                    <TableContentWrapperWithRatio href={"/report_thread/"+dictObj.reportId}>
                                        <TableText marginLeft={7} marginRight={2}>{index+1}</TableText>
                                        <TableText marginLeft={0} marginRight={3}>{statusDict[dictObj.status]}</TableText>
                                        <TableText marginLeft={0} marginRight={4}>{dictObj.result?dictObj.result:"⋯"}</TableText>
                                        <TruncatedTableText marginLeft={0} marginRight={1}>{dictObj.authorNickName}</TruncatedTableText>
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

    <ToastContainer>
    </ToastContainer>

    </>
    )
}