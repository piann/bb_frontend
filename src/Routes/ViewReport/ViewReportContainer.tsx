import React from "react";
import { useQuery } from "@apollo/client";
import ViewReportPresenter from "./ViewReportPresenter";
import {gql} from "apollo-boost";
import Page404 from "../../Components/Page404";

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
        }
    }

`;


export default (props:any) => {
    const result : any = props.match.params;
    const rId = result.report_id;
    const {data, loading } = useQuery(GET_REPORT_CONTENT, {variables:{rId}})

    let
    fileId,
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
    dump;
    
    
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

        } else {
            return <Page404 />
        }
    }

    console.log(fileId);////
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
    />
}