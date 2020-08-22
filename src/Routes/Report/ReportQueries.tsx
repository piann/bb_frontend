import {gql} from "apollo-boost";


export const GET_REPORT_READY_PAGE = gql`
    query getReportReadyPage(
        $bbpId:String
        $nameId: String
    ){
        getReportReadyPage(
            bbpId:$bbpId
            nameId:$nameId
        ){
            reportTipList
            disclosurePolicy
            vulnerabilityList{
                id
                category
                name
            }
            openDate
            closeDate
            inScopeTargetList{
                id
                type
                value
            }
        }
    }

`;