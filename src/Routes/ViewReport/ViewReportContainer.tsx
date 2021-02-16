import React from "react";
import { useQuery } from "@apollo/client";
import ViewReportPresenter from "./ViewReportPresenter";
import {gql} from "apollo-boost";
import Page404 from "../../Components/Page404";
import axios from "axios";
import { fileServerAddr } from "../../common";

export const GET_REPORT_CONTENT = gql`
    query getReportContent(
        $rId:String!
    ){
        getReportContent(
            rId:$rId
        ){
            fileId
            nameId
            profilePicId
            authorNickName
            vulName
            assetName
            title
            description
            cvssScore
            additionalText
            location
            enviroment
            dump
            createdAt
        }
    }

`;


export default (props:any) => {
    const result : any = props.match.params;
    const rId = result.report_id;
    const {data, loading } = useQuery(GET_REPORT_CONTENT, {variables:{rId}})

    let
    fileId:any,
    nameId,
    profilePicId,
    authorNickName,
    vulName,
    assetName,
    title,
    description,
    cvssScore,
    additionalText,
    location,
    enviroment,
    dump,
    createdAt;
    
    
    if(!loading){
        const {
            getReportContent:getReportContentResponse
        } = data;
    if(getReportContentResponse!==null){
        fileId = getReportContentResponse.fileId;
        nameId = getReportContentResponse.nameId;
        profilePicId = getReportContentResponse.profilePicId;
        authorNickName = getReportContentResponse.authorNickName;
        vulName = getReportContentResponse.vulName;
        assetName = getReportContentResponse.assetName;
        title = getReportContentResponse.title;
        description = getReportContentResponse.description;
        cvssScore = getReportContentResponse.cvssScore;
        additionalText = getReportContentResponse.additionalText;
        location = getReportContentResponse.location;
        enviroment = getReportContentResponse.enviroment;
        dump = getReportContentResponse.dump;
        createdAt = getReportContentResponse.createdAt;

        } else {
            return <Page404 />
        }
    }

    const fileDownloadFunc = async () => {
        const jwt = localStorage.getItem("token");
        const res = await axios({
            method: "get",
            url: fileServerAddr.concat("i/".concat(fileId.toString())),
            headers: {
            Authorization: jwt,
            "Content-Type" : "multipart/form-data",
            },
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.download = fileId.toString().concat(".zip");
        link.href = url;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    return <ViewReportPresenter
    loading={loading}
    nameId={nameId}
    fileId={fileId}
    profilePicId={profilePicId}
    authorNickName={authorNickName}
    vulName={vulName}
    assetName={assetName}
    title={title}
    description={description}
    cvssScore={cvssScore}
    additionalText={additionalText}
    location={location}
    enviroment={enviroment}
    dump={dump}
    createdAt={createdAt}
    fileDownloadFunc={fileDownloadFunc}
    />
}