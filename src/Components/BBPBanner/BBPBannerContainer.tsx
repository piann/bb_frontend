import React from "react";
import BBPBannerPresenter from "./BBPBannerPresenter";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";

interface Props{
    hideButton?:boolean;
    nameId?:string;
}

export const GET_PROGRAM_BANNER = gql`
    query getProgramBanner(
    $bbpId:String
    $nameId: String
    ){
        getProgramBanner(
            bbpId:$bbpId
            nameId:$nameId
        ){
            isPrivate
            companyName
            description
            webPageUrl
            submittedReportCount
            bountyMin
            bountyMax
            logoUrl
        }
    }

`;


const BBPBannerContainer:React.SFC<Props> = ({
    hideButton,
    nameId
}) => {
    const {data, loading} = useQuery(GET_PROGRAM_BANNER, {variables:{nameId}})
    
    let 
    isPrivate,
    companyName,
    description,
    webPageUrl,
    submittedReportCount,
    bountyMin,
    bountyMax,
    logoUrl;
    
    
    if(!loading){
        const {
            getProgramBanner:getProgramBannerResponse
        } = data;
    if(getProgramBannerResponse!==null){

        isPrivate = getProgramBannerResponse.isPrivate;
        companyName = getProgramBannerResponse.companyName;
        description = getProgramBannerResponse.description;
        webPageUrl = getProgramBannerResponse.webPageUrl;
        submittedReportCount = getProgramBannerResponse.submittedReportCount;
        bountyMin = getProgramBannerResponse.bountyMin;
        bountyMax = getProgramBannerResponse.bountyMax;
        logoUrl = getProgramBannerResponse.logoUrl;

    }

    }
    
    return(
        <BBPBannerPresenter
        loading={loading}
        nameId={nameId}
        hideButton={hideButton}
        companyName={companyName}
        description={description}
        reportCount={submittedReportCount}
        minBounty={bountyMin}
        maxBounty={bountyMax}
        />
    )
}

export default BBPBannerContainer;