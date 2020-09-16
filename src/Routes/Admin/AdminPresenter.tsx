import React from "react";
import styled from "styled-components";
import {BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import {statusDict, fileServerAddr} from "../../common";
import {BarLoader, SpinLoader} from "../../Components/Loaders"
import PhotoInput from "../../Components/PhotoInput";
import { ToastContainer } from "react-toastify";

const EditBoxWrapper = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:50px;
    justify-content:center;
`;

interface sizeProps{
    width?:string;
    height?:string;
}

export const EditBox = styled.div<sizeProps>`
width:${props => props.width};
height:${props => props.height};
background-color: white;
display:flex;
flex-direction:column;
box-shadow:0 3px 7px 3px rgba(7, 7, 33, 0.1),0 1px 1px 1px rgba(0, 0, 0, 0.2);
margin-bottom:70px;
padding-bottom:30px;

`;


export const EditBoxTitle = styled.div`
background-color:${props => props.theme.lightGrayColor};
color:${props => props.theme.headerBarColor};
height:50px;
display:flex;
align-items:center;
padding-left:20px;
`;

export const CompanyLogoContent = styled.div`
padding-top:40px;
display:flex;
flex-direction:row;
align-items:center;
`;


const InfoText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:8px;
`;


export default ({
    loading,
    infoList,
    uploading,
    onChangeLogo,
}:any) => <EditBoxWrapper>
    <ToastContainer/>
{loading?
<BarLoader/>:
<>
<EditBox width={"500px"} height={"max-content"}>
    <EditBoxTitle>Profile</EditBoxTitle>
    {infoList.map((dictObj:any, index:any) => {
        const companyId = dictObj.id;
        const companyName = dictObj.companyName;
        const nameId = dictObj.nameId;
        const logoId = dictObj.logoId;
        console.log(companyId);
        return (    
        <CompanyLogoContent key={companyId}>
            <PhotoInput
            idx={companyId}
            uploading={uploading}
            fileUrl={logoId?`${fileServerAddr}i/${logoId}/`:null}
            onChange={onChangeLogo}
            />
            <InfoText>{companyName}</InfoText>
        </CompanyLogoContent>
        )
    })}
 
</EditBox>
</>
}
</EditBoxWrapper>