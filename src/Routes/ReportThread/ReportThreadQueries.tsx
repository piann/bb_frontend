import {gql} from "apollo-boost";

export const GET_REPORT_TOTAL_STATUS = gql`
    query getReportTotalStatus(
    $rId:String!
    ){
        getReportTotalStatus(
            rId:$rId
        ){
            nameId
            authorNickName
            progressStatus
            resultCode
            bountyAmount
            commentInfoList{
                id
                content
                writerNickName
                fileId
            }
        }
    }

`;