import React, {useState} from "react";
import ReportThreadPresenter from "./ReportThreadPresenter";
import {GET_REPORT_TOTAL_STATUS, ADD_COMMENT } from "./ReportThreadQueries";
import { useQuery, useMutation } from "@apollo/client";
import { Redirect } from "react-router-dom";
import { useInput } from "../../utils";
import { toastOpt } from "../../common";
import { toast } from "react-toastify";
import {gql} from "apollo-boost";
import Page404 from "../../Components/Page404";

export default (props:any) => {
    const result : any = props.match.params;
    const rId = result.report_id;
    const {data, loading, refetch} = useQuery(GET_REPORT_TOTAL_STATUS, {variables:{rId}})

    const [addCommentMutation, {loading:submitLoading}] = useMutation(ADD_COMMENT);
    const commentInput = useInput("");
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const clickFunc = async (e:any) => {
        e.preventDefault();
        setButtonDisabled(true);

        if(commentInput.value===""){
            toast(" ⚠️ ⠀No empty comment !", toastOpt as any);
            setButtonDisabled(false);
            return;
        }

        const {
            data:{
                addComment:addCommentResponse
            }
        } = await addCommentMutation({variables:{
            rId,
            content:commentInput.value
        }});

        if(!submitLoading){
            if(addCommentResponse!==null){
                commentInput.setValue("");
                await refetch();
                setButtonDisabled(false);
            } else {
                toast("There is an error", toastOpt as any);
                setButtonDisabled(false);
                
            }
        }
    }


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
            return <Page404 />
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
        //
        buttonDisabled={buttonDisabled}
        commentInput={commentInput}
        clickFunc={clickFunc}
    />;
}