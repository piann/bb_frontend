import React from "react";
import BBPPresenter from "./BBPPresenter";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";
import Page404 from "../../Components/Page404";

export const GET_PROGRAM_BODY_CONTENTS = gql`
    query getProgramBodyContents(
    $bbpId:String
    $nameId: String
    ){
        getProgramBodyContents(
            bbpId:$bbpId
            nameId:$nameId
        ){
            disclosurePolicy
            introduction
            ruleValueList
            openDate
            closeDate
            lowPriceMin
            lowPriceMax
            mediumPriceMin
            mediumriceMax
            highPriceMin
            highriceMax
            fatalPriceMin
            fatalPriceMax
            inScopeTargetList{
                type
                value
            }
            outOfScopeTargetList{
                type
                value
            }
            exclusionValueList
        }
    }

`;

export default (props:any) => {

    const result : any = props.match.params;
    const nameId = result.name_id;
    const {data, loading} = useQuery(GET_PROGRAM_BODY_CONTENTS, {variables:{nameId}})
    
    let 
    disclosurePolicy,
    introduction,
    ruleValueList,
    openDate,
    closeDate,
    lowPriceMin,
    lowPriceMax,
    mediumPriceMin,
    mediumriceMax,
    highPriceMin,
    highriceMax,
    fatalPriceMin,
    fatalPriceMax,
    inScopeTargetList,
    outOfScopeTargetList,
    exclusionValueList;
    
    
    if(!loading){
        const {
            getProgramBodyContents:getProgramBodyContentsResponse
        } = data;
    if(getProgramBodyContentsResponse!==null){

            disclosurePolicy = getProgramBodyContentsResponse.disclosurePolicy;
            introduction = getProgramBodyContentsResponse.introduction;
            ruleValueList = getProgramBodyContentsResponse.ruleValueList;
            openDate = getProgramBodyContentsResponse.openDate;
            closeDate = getProgramBodyContentsResponse.closeDate;
            lowPriceMin = getProgramBodyContentsResponse.lowPriceMin;
            lowPriceMax = getProgramBodyContentsResponse.lowPriceMax;
            mediumPriceMin = getProgramBodyContentsResponse.mediumPriceMin;
            mediumriceMax = getProgramBodyContentsResponse.mediumriceMax;
            highPriceMin = getProgramBodyContentsResponse.highPriceMin;
            highriceMax = getProgramBodyContentsResponse.highriceMax;
            fatalPriceMin = getProgramBodyContentsResponse.fatalPriceMin;
            fatalPriceMax = getProgramBodyContentsResponse.fatalPriceMax;
            inScopeTargetList = getProgramBodyContentsResponse.inScopeTargetList;
            outOfScopeTargetList = getProgramBodyContentsResponse.outOfScopeTargetList;
            exclusionValueList = getProgramBodyContentsResponse.exclusionValueList;

        } else {
            return <Page404 />
        }

    } 
   
    return <BBPPresenter
        nameId={nameId}
        loading={loading}
        disclosurePolicy={disclosurePolicy}
        introduction={introduction}
        ruleValueList={ruleValueList}
        openDate={openDate}
        closeDate={closeDate}
        lowPriceMin={lowPriceMin}
        lowPriceMax={lowPriceMax}
        mediumPriceMin={mediumPriceMin}
        mediumriceMax={mediumriceMax}
        highPriceMin={highPriceMin}
        highriceMax={highriceMax}
        fatalPriceMin={fatalPriceMin}
        fatalPriceMax={fatalPriceMax}
        inScopeTargetList={inScopeTargetList}
        outOfScopeTargetList={outOfScopeTargetList}
        exclusionValueList={exclusionValueList}
        />
}