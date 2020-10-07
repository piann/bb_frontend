import React from "react";
import BBPProgressPresenter from "./BBPProgressPresenter";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";
import Page404 from "../../Components/Page404";

export const GET_BUSINESS_BOUNTY_PAGE = gql`
    query getBusinessBountyPage(
    $bbpId:String
    $nameId: String
    ){
        getBusinessBountyPage(
            bbpId:$bbpId
            nameId:$nameId
        ){
            submittedReportCount
            totalVulnerabilityCount
            rewardedVulnerabilityCount
            totalReward
            joinedHackerCount
            closeDate
            openDate
            firstReportDate
            recentReportDate
            reportInfoList{
                reportId
                status
                result
                authorNickName
            }
        }
    }
`;


export default (props:any) => {

    const result : any = props.match.params;
    const nameId = result.name_id;
    const {data, loading} = useQuery(GET_BUSINESS_BOUNTY_PAGE, {variables:{nameId}})

    let responseSuccess;

    let
    submittedReportCount,
    totalVulnerabilityCount,
    rewardedVulnerabilityCount,
    totalReward,
    joinedHackerCount,
    closeDate,
    openDate,
    firstReportDate,
    recentReportDate,
    reportInfoList;

    if(!loading){
        const {
            getBusinessBountyPage:getBusinessBountyPageResponse
        } = data;
    if(getBusinessBountyPageResponse!==null){

            submittedReportCount = getBusinessBountyPageResponse.submittedReportCount;
            totalVulnerabilityCount = getBusinessBountyPageResponse.totalVulnerabilityCount;
            rewardedVulnerabilityCount = getBusinessBountyPageResponse.rewardedVulnerabilityCount;
            totalReward = getBusinessBountyPageResponse.totalReward;
            joinedHackerCount = getBusinessBountyPageResponse.joinedHackerCount;
            closeDate = getBusinessBountyPageResponse.closeDate;
            openDate = getBusinessBountyPageResponse.openDate;
            firstReportDate = getBusinessBountyPageResponse.firstReportDate;
            recentReportDate = getBusinessBountyPageResponse.recentReportDate;
            reportInfoList = getBusinessBountyPageResponse.reportInfoList;


        } else {
            responseSuccess = false;
            return <Page404 />
        }

    }
    return <BBPProgressPresenter
        loading={loading}
        responseSuccess={responseSuccess}
        nameId={nameId}
        submittedReportCount={submittedReportCount}
        totalVulnerabilityCount={totalVulnerabilityCount}
        rewardedVulnerabilityCount={rewardedVulnerabilityCount}
        totalReward={totalReward}
        joinedHackerCount={joinedHackerCount}
        closeDate={closeDate}
        openDate={openDate}
        firstReportDate={firstReportDate}
        recentReportDate={recentReportDate}
        reportInfoList={reportInfoList}
    />;
}