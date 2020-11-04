import React from "react";
import styled from "styled-components";
import {BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import {statusDict} from "../../common";
import {BarLoader} from "../../Components/Loaders"
import PhotoInput from "../../Components/PhotoInput";
import { ToastContainer } from "react-toastify";
import {fileServerAddr} from "../../common";
import Button from "../../Components/Button";
import {truncateLongStr} from "../../utils";


const ProfileWrapper = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:50px;
    justify-content:center;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    align-items: center;  
    flex-direction: column;
    }
`;

interface sizeProps{
    width?:string;
    height?:string;
}

export const ProfileBox = styled.div<sizeProps>`
width:${props => props.width};
height:${props => props.height};
background-color: white;
display:flex;
flex-direction:column;
box-shadow:0 3px 7px 3px rgba(7, 7, 33, 0.1),0 1px 1px 1px rgba(0, 0, 0, 0.2);
margin-bottom:70px;
padding-bottom:20px;
`;

export const MobileEachReport = styled.div`
display:flex;
flex-direction:row;
border-style:groove;
border-top-color:${props => props.theme.snowyGrayColor};
border-top-width:2px;
font-size:11px;
height: 100px;
display:flex;
align-items:center;
`;


export const ProfileTitle = styled.div`
background-color:${props => props.theme.lightGrayColor};
color:${props => props.theme.headerBarColor};
height:50px;
display:flex;
align-items:center;
padding-left:20px;
@media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    padding-left:18px;
    }
`;

export const ProfileContent = styled.div`
padding-top:45px;
padding-bottom:30px;
padding-left:25px;
padding-right:25px;
display:flex;
flex-direction:column;
align-items:center;

@media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    padding-left:18px;
    padding-right:18px;
    }
`;

const EmptySpace = styled.div`
width:50px;
`
const InfoText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:8px;
`;

const BoldText = styled(InfoText)`
    font-weight:600;
`;

const SpecRow = styled.div`
    margin-left:18px;
    display:flex;
    flex-direction:row;
`;

const LogOutBox = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 30px;
`;

export const MiniTableBox = styled.div`
display:flex;
flex-direction:column;
border-style:groove;
border-color:${props => props.theme.snowyGrayColor};
border-width:2px;
margin-bottom:20px;
margin-left:2px;
margin-right:2px;
width:100%;
`;


const MiniTableHead = styled(BasicTableHead)`
background-color:${props => props.theme.bgColor};
height:40px;
padding-left:10px;
padding-right:10px;
width:100%;
`;

const MobileMiniTableHead = styled(BasicTableHead)`
background-color:${props => props.theme.bgColor};
height:40px;
padding-left:6px;
width:100%;
`;

const MiniTableContent = styled(BasicTableContent)`
height: 40px;
padding-left:4px;
padding-right:4px;
width:100%;
`;

const MobileMiniTableContent = styled.div`
height: 100px;
width:100%;
border-style:groove;
border-left-color:${props => props.theme.snowyGrayColor};
border-left-width:2px;
`;

const TableContentWrapperWithRatio = styled.a`
    width:100%;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: 3fr 1.5fr 1fr 1fr;
    color:inherit;
    text-decoration: none;
`;

const MobileTableContentWrapperWithRatio = styled.a`
    width:100%;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: 4fr 3fr;
    grid-template-rows: 1fr 1fr;
    color:inherit;
    text-decoration: none;
`;


interface marginProps{
    marginLeft:number;
    marginRight:number;
}


const TableText = styled.div<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
`;

const MobileHeadText = styled.div<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:1rem;
    text-align:center;
    height: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
`;

const MobileTableText = styled.div<marginProps>`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:1rem;
    text-align:center;
    height: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
    border-style:groove;
    border-color:rgba(180,180,210,0.1);
    border-width:1px;
`;


export default ({
    email,
    nickName,
    profilePictureId,
    credit,
    numOfVul,
    reportInfoList,
    loading,
    uploading,
    onChangeProfile,
    clickFunc
}:any) => 
{
    return(
        window.innerWidth>700?
        // for desktop
        <ProfileWrapper>
        <ToastContainer/>
    {loading?
    <BarLoader/>:
    <>
    <ProfileBox width={"235px"} height={"max-content"}>
        <ProfileTitle>Profile</ProfileTitle>
        <ProfileContent>
            <PhotoInput
            uploading={uploading}
            fileUrl={profilePictureId?`${fileServerAddr}i/${profilePictureId}/`:null}
            onChange={onChangeProfile}
            />
            <InfoText>{nickName}</InfoText>
        </ProfileContent>
        <SpecRow>
            <BoldText>{"Credit⠀:⠀"}</BoldText>
            <InfoText>{credit}</InfoText>
        </SpecRow>
        <SpecRow>
            <BoldText>{"Vulnerabilities found⠀:⠀"}</BoldText>
            <InfoText>{numOfVul}</InfoText>
        </SpecRow>
    
    </ProfileBox>
    <EmptySpace/>

    <ProfileBox width={"800px"} >
        <ProfileTitle>Reports</ProfileTitle>
            <ProfileContent>
                {(reportInfoList===null || reportInfoList.length===0)?
                <InfoText>
                    {"아직 제출한 리포트가 없습니다. 버그바운티에 참여해보세요!"}
                </InfoText>
                :
                <MiniTableBox>
                        <MiniTableHead>
                            <TableContentWrapperWithRatio>
                                <TableText marginLeft={0} marginRight={10}>{"Reported Vulnerability"}</TableText>
                                <TableText marginLeft={10} marginRight={10}>{"Company"}</TableText>
                                <TableText marginLeft={0} marginRight={0}>{"Status"}</TableText>
                                <TableText marginLeft={10} marginRight={0}>{"Result"}</TableText>
                            </TableContentWrapperWithRatio>
                        </MiniTableHead>
                            {reportInfoList.map((dictObj:any, index:any) => {
                                return (
                                <MiniTableContent key={1000+index}>
                                    <TableContentWrapperWithRatio href={"/report_thread/"+dictObj.reportId}>
                                            <TableText marginLeft={0} marginRight={10}>{dictObj.vulName}</TableText>
                                            <TableText marginLeft={10} marginRight={10}>{dictObj.companyName}</TableText>
                                            <TableText marginLeft={0} marginRight={0}>{statusDict[dictObj.status]}</TableText>
                                            <TableText marginLeft={0} marginRight={0}>{dictObj.result?dictObj.result:"-"}</TableText>
                                    </TableContentWrapperWithRatio>
                                </MiniTableContent>)
                            })}
                </MiniTableBox>
                }
            </ProfileContent>
        </ProfileBox>
    </>
    }
    </ProfileWrapper>
        :
        // for mobile
        <ProfileWrapper>
        <ToastContainer/>
    {loading?
    <BarLoader/>:
    <>
    <ProfileBox width={`calc(99vw - 20px)`} height={"max-content"}>
        <ProfileTitle>Profile</ProfileTitle>
        <ProfileContent>
            <PhotoInput
            uploading={uploading}
            fileUrl={profilePictureId?`${fileServerAddr}i/${profilePictureId}/`:null}
            onChange={onChangeProfile}
            />
            <InfoText>{nickName}</InfoText>
        </ProfileContent>
        <SpecRow>
            <BoldText>{"Credit⠀:⠀"}</BoldText>
            <InfoText>{credit}</InfoText>
        </SpecRow>
        <SpecRow>
            <BoldText>{"Vulnerabilities found⠀:⠀"}</BoldText>
            <InfoText>{numOfVul}</InfoText>
        </SpecRow>
    
    </ProfileBox>
    <EmptySpace/>

    <ProfileBox width={`calc(99vw - 20px)`} >
        <ProfileTitle>Reports</ProfileTitle>
            <ProfileContent>
                {(reportInfoList===null || reportInfoList.length===0)?
                <InfoText>
                    {"아직 제출한 리포트가 없습니다. 버그바운티에 참여해보세요!"}
                </InfoText>
                :
                <MiniTableBox>
                            <MobileMiniTableHead>
                                <MobileHeadText marginLeft={0} marginRight={0}>#</MobileHeadText>
                            </MobileMiniTableHead>
                            {reportInfoList.map((dictObj:any, index:any) => {
                                return (
                                    <MobileEachReport key={1000+index}>
                                        <MobileHeadText marginLeft={6} marginRight={6}>{index+1}</MobileHeadText>
                                        <MobileMiniTableContent>
                                            <MobileTableContentWrapperWithRatio href={"/report_thread/"+dictObj.reportId}>
                                                    
                                                        <MobileTableText marginLeft={0} marginRight={0}>{truncateLongStr(dictObj.vulName, 37)} </MobileTableText>
                                                    
                                                        <MobileTableText marginLeft={0} marginRight={0}>{truncateLongStr(statusDict[dictObj.status],37)}</MobileTableText>
                                                    
                                                        <MobileTableText marginLeft={0} marginRight={0}>{dictObj.companyName}</MobileTableText>

                                                        <MobileTableText marginLeft={0} marginRight={0}>{dictObj.result?dictObj.result:"-"}</MobileTableText>
                                            </MobileTableContentWrapperWithRatio>
                                        </MobileMiniTableContent>
                                    </MobileEachReport>)
                            })}
                </MiniTableBox>
                }
            </ProfileContent>
        </ProfileBox>
    </>
    }
    </ProfileWrapper>
)}