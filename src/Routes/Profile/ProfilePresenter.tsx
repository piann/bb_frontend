import React from "react";
import styled from "styled-components";
import basicProfile from "../../images/basicProfile.png";
import {BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import {statusDict} from "../../common";
import {BarLoader} from "../../Components/Loaders"
import { Redirect } from "react-router-dom";

const ProfileWrapper = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:50px;
    justify-content:center;
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
`;

export const ProfileTitle = styled.div`
background-color:${props => props.theme.lightGrayColor};
color:${props => props.theme.headerBarColor};
height:50px;
display:flex;
align-items:center;
padding-left:20px;
`;

export const ProfileContent = styled.div`
padding-top:45px;
padding-bottom:30px;
padding-left:25px;
padding-right:25px;
display:flex;
flex-direction:column;
align-items:center;
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

const BoldInfoText = styled(InfoText)`
    font-weight:600;
`;


export const MiniTableBox = styled.div`
display:flex;
flex-direction:column;
border-style:groove;
border-color:${props => props.theme.snowyGrayColor};
border-width:2px;
margin-bottom:20px;
margin-left:8px;
margin-right:8px;
width:100%;
`;


const MiniTableHead = styled(BasicTableHead)`
background-color:${props => props.theme.bgColor};
height:40px;
padding-left:10px;
padding-right:10px;
width:100%;
`;

const MiniTableContent = styled(BasicTableContent)`
height: 40px;
padding-left:10px;
padding-right:10px;
width:100%;
`

const TableContentWrapperWithRatio = styled.a`
    width:100%;
    display:grid;
    grid-auto-flow: column;
    grid-template-columns: 3fr 1.5fr 1fr 1fr;
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
    display:flex;
    justify-content:center;
    margin-left:${props=>props.marginLeft}px;
    margin-right:${props=>props.marginRight}px;
`;

const elements = ['이런 것을 이렇게 해야한다', '저렇게 이렇게 꼭 해야한다', '이런 것을 알아야한다.'];////
const testTargetObjList = [
    {
      reportId: "ckdd2g2au0006a1p4donly56g",
      companyName: "starbucks",
      status: "0",
      result: null
    },
    {
        reportId: "ckdd2g2au0006a1p4donly56g",
        companyName: "TestName",
        status: "0",
        result: null
    },
    {
        reportId: "ckdd2g2au0006a1p4donly56g",
        companyName: "starbucks",
        status: "0",
        result: null
      },
      {
          reportId: "ckdd2g2au0006a1p4donly56g",
          companyName: "TestName",
          status: "0",
          result: null
      },
      
  ] ////;


export default ({
    email,
    nickName,
    profilePictureId,
    reportInfoList,
    loading,
}:any) => <ProfileWrapper>
{loading?
<BarLoader/>:
<>
<ProfileBox width={"200px"} height={"220px"}>
    <ProfileTitle>Profile</ProfileTitle>
    <ProfileContent>
        <img src={basicProfile} width={"60px"} height={"60px"}/>
        <InfoText>{nickName}</InfoText>
    </ProfileContent>
</ProfileBox>
<EmptySpace/>

<ProfileBox width={"800px"} >
    <ProfileTitle>Reports</ProfileTitle>
    <ProfileContent>
        {reportInfoList.length===0?
        <InfoText>
            {"아직 제출한 리포트가 없습니다. 버그바운티에 참여해보세요!"}
            {"\n프로그램 리스트 버튼"}
        </InfoText>
        :
        <MiniTableBox>
                    <MiniTableHead>
                        <TableContentWrapperWithRatio>
                            <TableText marginLeft={0} marginRight={10}>Reported Vulnerability</TableText>
                            <TableText marginLeft={10} marginRight={10}>company</TableText>
                            <TableText marginLeft={0} marginRight={0}>status</TableText>
                            <TableText marginLeft={10} marginRight={0}>result</TableText>
                        </TableContentWrapperWithRatio>
                    </MiniTableHead>
                    {reportInfoList.map((dictObj:any, index:any) => {
                         return (<MiniTableContent key={1000+index}>
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