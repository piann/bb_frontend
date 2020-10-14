import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BasicTableBox, BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import {dateStringToDotFormat, addCommaForMoney, getTypeImage} from "../../utils";

const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:grid;
    grid-auto-flow: row;
    grid-column-gap:20px;
    grid-template-columns: 4fr 1fr;
    padding-left:15px;
    padding-right:15px;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        display:flex;
        flex-direction:column;
        padding-left:0px;
        padding-right:0px;
    }
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
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        display:none;
    }
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
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    font-size:14px;
    }

`

interface marginProps{
    marginLeft:number;
    marginRight:number;
}


const TableContentWrapper = styled.div`
    width:100%;
    display:grid;
    grid-auto-flow: row;
    grid-template-columns: 2fr 3.5fr;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        grid-template-columns: 1fr 2.2fr;
    }
`;


const TableContentWrapperWithRatio = styled.div`
    width:100%;
    display:grid;
    grid-auto-flow: row;
    grid-template-columns: 2fr 3.5fr;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        grid-template-columns: 1fr 3.5fr
    }
`;

const TableText = styled.div<marginProps>`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap');
    font-family: 'Nanum Myeongjo', serif;
    font-size:16px;
    word-break: keep-all;
    word-spacing: 0.1em;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
    display:flex;
    align-items:center;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size:13px;
        overflow-wrap:anywhere;
    }
`;

const ImgFollowedText = styled.div`
    margin-left:8px;
    word-break: keep-all;
`;

/*
const elements = ['이런 것을 이렇게 해야한다', '저렇게 이렇게 꼭 해야한다', '이런 것을 알아야한다.'];
const testTargetObjList = [{type:"WEB", value:"https://starbucks.com"},{type:"WEB", value:"https://api.starbucks.com"} ]
*/
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
mediumPriceMax,
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
                            <TableText marginLeft={10} marginRight={0}>Grade</TableText>
                            <TableText marginLeft={5} marginRight={60}>Range</TableText>
                        </TableContentWrapper>
                    </BasicTableHead>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={8} marginRight={0}>
                            <img height={"10px"} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODQyLDAsMCwxMTQuODQyLDAsMjU2czExNC44NDIsMjU2LDI1NiwyNTZzMjU2LTExNC44NDIsMjU2LTI1NlMzOTcuMTU4LDAsMjU2LDB6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjYTRlMjc2IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTAsMjU2YzAsMTQxLjE1OCwxMTQuODQyLDI1NiwyNTYsMjU2VjBDMTE0Ljg0MiwwLDAsMTE0Ljg0MiwwLDI1NnoiIGZpbGw9IiMzZTNlM2UiIGRhdGEtb3JpZ2luYWw9IiM2NGMzN2QiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                                <ImgFollowedText>{"Fatal"}</ImgFollowedText>
                            </TableText>
                            <TableText marginLeft={5} marginRight={0}>
                                {(fatalPriceMax===0||fatalPriceMax===undefined)?
                                "Credit Only":
                                `₩${addCommaForMoney(fatalPriceMin)} ~ ₩${addCommaForMoney(fatalPriceMax)}`
                                }
                            </TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={8} marginRight={0}>
                                <img height={"10px"} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODQyLDAsMCwxMTQuODQyLDAsMjU2czExNC44NDIsMjU2LDI1NiwyNTZzMjU2LTExNC44NDIsMjU2LTI1NlMzOTcuMTU4LDAsMjU2LDB6IiBmaWxsPSIjZmYwMDAwIiBkYXRhLW9yaWdpbmFsPSIjYTRlMjc2IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTAsMjU2YzAsMTQxLjE1OCwxMTQuODQyLDI1NiwyNTYsMjU2VjBDMTE0Ljg0MiwwLDAsMTE0Ljg0MiwwLDI1NnoiIGZpbGw9IiNmZjczNzMiIGRhdGEtb3JpZ2luYWw9IiM2NGMzN2QiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                                <ImgFollowedText>{"High"}</ImgFollowedText>
                            </TableText>
                            <TableText marginLeft={5} marginRight={0}>
                                {(highriceMax===0||highriceMax===undefined)?
                                "Credit Only":
                                `₩${addCommaForMoney(highPriceMin)} ~ ₩${addCommaForMoney(highriceMax)}`
                                }
                            </TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={8} marginRight={0}>
                            <img height={"10px"} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODQyLDAsMCwxMTQuODQyLDAsMjU2czExNC44NDIsMjU2LDI1NiwyNTZzMjU2LTExNC44NDIsMjU2LTI1NlMzOTcuMTU4LDAsMjU2LDB6IiBmaWxsPSIjZmY4MzAwIiBkYXRhLW9yaWdpbmFsPSIjYTRlMjc2IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTAsMjU2YzAsMTQxLjE1OCwxMTQuODQyLDI1NiwyNTYsMjU2VjBDMTE0Ljg0MiwwLDAsMTE0Ljg0MiwwLDI1NnoiIGZpbGw9IiNmZmFhNTEiIGRhdGEtb3JpZ2luYWw9IiM2NGMzN2QiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                                <ImgFollowedText>{"Medium"}</ImgFollowedText>
                            </TableText>
                            <TableText marginLeft={5} marginRight={0}>
                                {(mediumPriceMax===0||mediumPriceMax===undefined)?
                                "Credit Only":
                                `₩${addCommaForMoney(mediumPriceMin)} ~ ₩${addCommaForMoney(mediumPriceMax)}`
                                }
                            </TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                    <BasicTableContent>
                        <TableContentWrapper>
                            <TableText marginLeft={8} marginRight={0}>
                            <img height={"10px"} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODQyLDAsMCwxMTQuODQyLDAsMjU2czExNC44NDIsMjU2LDI1NiwyNTZzMjU2LTExNC44NDIsMjU2LTI1NlMzOTcuMTU4LDAsMjU2LDB6IiBmaWxsPSIjZGZkYzAwIiBkYXRhLW9yaWdpbmFsPSIjYTRlMjc2IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTAsMjU2YzAsMTQxLjE1OCwxMTQuODQyLDI1NiwyNTYsMjU2VjBDMTE0Ljg0MiwwLDAsMTE0Ljg0MiwwLDI1NnoiIGZpbGw9IiNmZmZiMTciIGRhdGEtb3JpZ2luYWw9IiM2NGMzN2QiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                                <ImgFollowedText>{"Low"}</ImgFollowedText>
                            </TableText>
                            <TableText marginLeft={5} marginRight={0}>
                                {(lowPriceMax===0||lowPriceMax===undefined)?
                                "Credit Only":
                                `₩${addCommaForMoney(lowPriceMin)} ~ ₩${addCommaForMoney(lowPriceMax)}`
                                }
                            </TableText>
                        </TableContentWrapper>
                    </BasicTableContent>
                </BasicTableBox>

                <MiniTitleText>{"\nIn Scope"}</MiniTitleText>
                <BasicTableBox>
                    <BasicTableHead>
                        <TableContentWrapperWithRatio>
                            <TableText marginLeft={10} marginRight={10}>Type</TableText>
                            <TableText marginLeft={0} marginRight={60}>Target</TableText>
                        </TableContentWrapperWithRatio>
                    </BasicTableHead>
                    
                    
                    {inScopeTargetList.map((dictObj:any, index:any) => {
                         return (<BasicTableContent key={2000+index}>
                             <TableContentWrapperWithRatio>
                                 <TableText key={3000+index} marginLeft={10} marginRight={10}>{getTypeImage(dictObj.type)}</TableText>
                                 <TableText key={4000+index} marginLeft={0} marginRight={0}>{dictObj.value}</TableText>
                             </TableContentWrapperWithRatio>
                         </BasicTableContent>)
                    })}
                    
                </BasicTableBox>

                {outOfScopeTargetList.length===0?
                <></>:
                <>
                <MiniTitleText>{"\nOut Of Scope"}</MiniTitleText>
                <BasicTableBox>
                    <BasicTableHead>
                        <TableContentWrapperWithRatio>
                            <TableText marginLeft={10} marginRight={0}>Type</TableText>
                            <TableText marginLeft={0} marginRight={70}>Target</TableText>
                        </TableContentWrapperWithRatio>
                    </BasicTableHead>
                    
                    
                    {outOfScopeTargetList.map((dictObj:any, index:any) => {
                         return (<BasicTableContent key={5000+index}>
                             <TableContentWrapperWithRatio>
                                 <TableText key={5000+index} marginLeft={10} marginRight={10}>{dictObj.type}</TableText>
                                 <TableText key={6000+index} marginLeft={0} marginRight={0}>{dictObj.value}</TableText>
                             </TableContentWrapperWithRatio>
                         </BasicTableContent>)
                    })}
                    
                </BasicTableBox>
                <InfoText>{"⚬  이 외에도 특별히 명시되지 않은 범위는 보상에서 제외됩니다.\n"}</InfoText>
                </>
                }
 
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