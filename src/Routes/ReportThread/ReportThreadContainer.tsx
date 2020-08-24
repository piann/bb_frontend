import React from "react";
import ReportThreadPresenter from "./ReportThreadPresenter";
import {GET_REPORT_TOTAL_STATUS} from "./ReportThreadQueries";
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";


export default (props:any) => {
    const result : any = props.match.params;
    const rId = result.report_id;
    const {data, loading} = useQuery(GET_REPORT_TOTAL_STATUS, {variables:{rId}})

    let
    nameId,
    authorNickName,
    progressStatus,
    resultCode,
    bountyAmount,
    commentInfoList;
    

    if(!loading){
        const {
            getReportTotalStatus:getReportTotalStatusResponse
        } = data;
    if(getReportTotalStatusResponse!==null){
        nameId = getReportTotalStatusResponse.nameId;
        authorNickName = getReportTotalStatusResponse.authorNickName;
        progressStatus = getReportTotalStatusResponse.progressStatus;
        resultCode = getReportTotalStatusResponse.resultCode;
        bountyAmount = getReportTotalStatusResponse.bountyAmount;
        commentInfoList = getReportTotalStatusResponse.commentInfoList;

        } else {
            return <Redirect to="/" />
        }
    }


    return <ReportThreadPresenter
        loading={loading}
        nameId={nameId}
        authorNickName={authorNickName}
        progressStatus={progressStatus}
        resultCode={resultCode}
        bountyAmount={bountyAmount}
        commentInfoList={commentInfoList}
    />;
}