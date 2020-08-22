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



export const SUBMIT_REPORT = gql`
    mutation submitReport(
    $bbpId:String
    $nameId:String
    $targetId:Int! # if target is -1, target is "others"
    $vId:Int!
    $attackComplexity:Int
    $requiredPriv:Int
    $userInteraction:Int
    $confidentiality:Int
    $integrity:Int
    $availablity:Int
    $title:String
    $location:String
    $enviroment:String
    $description:String!
    $dump:String
    $additionalText:String
    $collaboratorInfoList:[collaboratorInfo]
    ){
        submitReport(
            bbpId:$bbpId
            nameId:$nameId
            targetId:$targetId
            vId:$vId
            attackComplexity:$attackComplexity
            requiredPriv:$requiredPriv
            userInteraction:$userInteraction
            confidentiality:$confidentiality
            integrity:$integrity
            availablity:$availablity
            title:$title
            location:$location
            enviroment:$enviroment
            description:$description
            dump:$dump
            additionalText:$additionalText
            collaboratorInfoList:$collaboratorInfoList
        ) # return created report Id
        
    }

`;