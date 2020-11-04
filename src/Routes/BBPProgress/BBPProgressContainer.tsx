import React from "react";
import BBPProgressPresenter from "./BBPProgressPresenter";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import {toastOpt} from "../../common";
import { Redirect } from "react-router-dom";
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
            isInitBugbounty
        }
    }
`;



export default (props:any) => {

    const result : any = props.match.params;
    const nameId = result.name_id;
    const {data, loading} = useQuery(GET_BUSINESS_BOUNTY_PAGE, {variables:{nameId}})
    let responseSuccess;

    let
    submittedReportCount = 0,
    totalVulnerabilityCount = 0,
    rewardedVulnerabilityCount = 0,
    totalReward = 0,
    joinedHackerCount = 0,
    closeDate,
    openDate,
    firstReportDate,
    recentReportDate,
    reportInfoList,
    isInitBugbounty


    if(!loading){
        const {
            getBusinessBountyPage:getBusinessBountyPageResponse
        } = data;

        // 1. admin
        // 2. company in progress Bugbounty
        // 3. company not in progress Bugbounty
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
                isInitBugbounty = getBusinessBountyPageResponse.isInitBugbounty;

                if(isInitBugbounty===false){
                    //그 기업이긴한데 버그바운티 시작 안함
                    toast("진행 중인 버그바운티가 없습니다. 버그바운티를 진행해보세요", toastOpt as any);
                }


        } 
        // 3. unauthorized account  -> return null
        else{
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