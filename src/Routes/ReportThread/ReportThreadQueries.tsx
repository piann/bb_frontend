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
            grantedCredit
            commentInfoList{
                id
                content
                writerNickName
                fileId
            }
        }
    }

`;



export const ADD_COMMENT = gql`
    mutation addComment(
        $rId:String!
        $content:String!
        $fileId:String
    ){
        addComment(
            rId:$rId
            content:$content
            fileId:$fileId
        ) # return created comment id
        
    }

`;