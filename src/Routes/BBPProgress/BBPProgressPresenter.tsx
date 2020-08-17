import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BasicTableBox, BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"


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

const MiniTitleText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    font-weight:600;
    font-size:16px;
    margin-bottom:30px;

`
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



const TableContentWrapperWithRatio = styled.div`
    width:100%;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: 3fr 2fr 2fr 2.5fr;
`;

const TableText = styled.div<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    display:flex;
    justify-content:center;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
`;

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
  ] ////;

export default () => 
<>
<BBPBanner hideButton={true}/>
<BBPSubMenu/>
<BBPBody>
        <InformationBox>
            <InformationTitle>Summary</InformationTitle>
            <InformationContent>
                <GridWrapper>
                    <GridContent>
                        <BoldInfoText>{"총 제출 리포트 수 :"}</BoldInfoText>
                        <InfoText>{23}</InfoText>
                    </GridContent>
                    <GridContent>
                        <BoldInfoText>{"시작 후 경과 시간 :"}</BoldInfoText>
                        <InfoText>{"3일 15시간"}</InfoText>
                    </GridContent>
                    <GridContent>
                        <BoldInfoText>{"발견된 취약점 수 :"}</BoldInfoText>
                        <InfoText>{18}</InfoText>
                    </GridContent>
                    <GridContent>
                        <BoldInfoText>{"총 참가 해커 수 :"}</BoldInfoText>
                        <InfoText>{"12명"}</InfoText>
                    </GridContent>
                    <GridContent>
                        <BoldInfoText>{"보상 인정 취약점 수 :"}</BoldInfoText>
                        <InfoText>{"9"}</InfoText>
                    </GridContent>
                    <GridContent>
                        <BoldInfoText>{"최초 레포트 제출 시기 :"}</BoldInfoText>
                        <InfoText>{"시작 후 18시간 후"}</InfoText>
                    </GridContent>
                    <GridContent>
                        <BoldInfoText>{"총 지불 포상금 :"}</BoldInfoText>
                        <InfoText>{"₩750000"}</InfoText>
                    </GridContent>
                    <GridContent>
                        <BoldInfoText>{"최근 레포트 제출 시점 :"}</BoldInfoText>
                        <InfoText>{"8시간 전"}</InfoText>
                    </GridContent>
                </GridWrapper>
            </InformationContent>
        </InformationBox>
        {/* second area start */}
        <InformationBox>
            <InformationTitle>Reports</InformationTitle>
            <InformationContent>
                <BasicTableBox>
                    <BasicTableHead>
                        <TableContentWrapperWithRatio>
                            <TableText marginLeft={0} marginRight={0}>report id</TableText>
                            <TableText marginLeft={0} marginRight={0}>status</TableText>
                            <TableText marginLeft={0} marginRight={0}>result</TableText>
                            <TableText marginLeft={0} marginRight={0}>by hacker</TableText>
                        </TableContentWrapperWithRatio>
                    </BasicTableHead>
                    {testTargetObjList.map((dictObj, index) => {
                         return (<BasicTableContent>
                             <TableContentWrapperWithRatio>
                                 <TableText marginLeft={0} marginRight={0}>{dictObj.reportId}</TableText>
                                 <TableText marginLeft={0} marginRight={0}>{dictObj.status}</TableText>
                                 <TableText marginLeft={0} marginRight={0}>{dictObj.result?"Good":"Bad"}</TableText>
                                 <TableText marginLeft={0} marginRight={0}>{dictObj.authorNickName}</TableText>
                             </TableContentWrapperWithRatio>
                         </BasicTableContent>)
                    })}
                </BasicTableBox>

            </InformationContent>
        </InformationBox>

</BBPBody>

</>