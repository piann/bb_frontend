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

const InfoText = styled.text`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:8px;
`;

const MiniTitleText = styled.text`
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

const TableText = styled.text<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
`;

const elements = ['이런 것을 이렇게 해야한다', '저렇게 이렇게 꼭 해야한다', '이런 것을 알아야한다.'];////
const testTargetObjList = [{type:"WEB", value:"https://starbucks.com"},{type:"WEB", value:"https://api.starbucks.com"} ]////;

export default () => 
<>
<BBPBanner hideButton={true}/>
<BBPSubMenu/>
<BBPBody>
        <InformationBox>
            <InformationTitle>Summary</InformationTitle>
            <InformationContent>

            </InformationContent>
        </InformationBox>
        {/* second area start */}
        <InformationBox>
            <InformationTitle>Reports</InformationTitle>
            <InformationContent>
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
                            <TableText marginLeft={0} marginRight={0}>{"₩500000 ~ ₩1000000"}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={0} marginRight={0}>🔴  High</TableText>
                            <TableText marginLeft={0} marginRight={0}>{"₩200000 ~ ₩500000"}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={0} marginRight={0}>🟠  Medium</TableText>
                            <TableText marginLeft={0} marginRight={0}>{"₩100000 ~ ₩200000"}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={0} marginRight={0}>🟡  Low</TableText>
                            <TableText marginLeft={0} marginRight={0}>{"₩30000 ~ ₩50000"}</TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                </BasicTableBox>

            </InformationContent>
        </InformationBox>

</BBPBody>

</>