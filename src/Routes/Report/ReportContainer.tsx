import React from "react";
import ReportPresenter from "./ReportPresenter";
import { useQuery } from "@apollo/client";
import { GET_REPORT_READY_PAGE } from "./ReportQueries";


export default (props:any) => {

    const result : any = props.match.params;
    const nameId = result.name_id;
    let vulnerabilityListForDropdown = [];
    let inScopeTargetListForDropdown = [];
    const {data, loading} = useQuery(GET_REPORT_READY_PAGE, {variables:{nameId}})
    
    let 
    reportTipList,
    disclosurePolicy,
    vulnerabilityList,
    openDate,
    closeDate,
    inScopeTargetList;

    
    if(!loading){
        const {
            getReportReadyPage:getReportReadyPageResponse
        } = data;
    if(getReportReadyPageResponse!==null){
        reportTipList = getReportReadyPageResponse.reportTipList;
        disclosurePolicy = getReportReadyPageResponse.disclosurePolicy;
        vulnerabilityList = getReportReadyPageResponse.vulnerabilityList;
        openDate = getReportReadyPageResponse.openDate;
        closeDate = getReportReadyPageResponse.closeDate;
        inScopeTargetList = getReportReadyPageResponse.inScopeTargetList;

        }

        // setting up data for Dropdown //
        
        // vulnerability
        let categoryList = [] ; 
        for(const vul of vulnerabilityList){
            categoryList.push(vul.category);
        }
        const uniqueCategoryList = [...new Set(categoryList) as any];


        
        for(const category of uniqueCategoryList){
            const gOpt = {label:"", options:[] as any}
            gOpt.label = category;
            vulnerabilityListForDropdown.push(gOpt);
        }

        for(const vul of vulnerabilityList){
            const vulObj = {value:"",label:""};
            vulObj.value = vul.id;
            vulObj.label = vul.name;
            for(const gOpt of vulnerabilityListForDropdown){
                if(vul.category===gOpt.label){
                    gOpt.options.push(vulObj);
                }
            }

        }

        // inScopeTarget
        
        let typeList = [] ; 
        for(const inScopeTarget of inScopeTargetList){
            typeList.push(inScopeTarget.type);
        }
        const uniquetypeList = [...new Set(typeList) as any];

        console.log(uniquetypeList);////

        for(const type of uniquetypeList){
            const gOpt = {label:"", options:[] as any}
            gOpt.label = type;
            inScopeTargetListForDropdown.push(gOpt);
        }


        for(const inScopeTarget of inScopeTargetList){
            const inScopeObj = {value:-1,label:""};
            inScopeObj.value = inScopeTarget.id;
            inScopeObj.label = inScopeTarget.value;
            for(const gOpt of inScopeTargetListForDropdown){
                if(inScopeTarget.type===gOpt.label){
                    gOpt.options.push(inScopeObj);
                }
            }
        }
        
        console.log(inScopeTargetListForDropdown);////
    }

    return <ReportPresenter
        loading={loading}
        nameId={nameId}
        reportTipList={reportTipList}
        disclosurePolicy={disclosurePolicy}
        vulnerabilityList={vulnerabilityListForDropdown}
        openDate={openDate}
        closeDate={closeDate}
        inScopeTargetList={inScopeTargetListForDropdown}
    />


}