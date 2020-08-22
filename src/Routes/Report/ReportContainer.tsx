import React, {useState, MouseEvent} from "react";
import ReportPresenter from "./ReportPresenter";
import { useQuery } from "@apollo/client";
import { GET_REPORT_READY_PAGE, SUBMIT_REPORT } from "./ReportQueries";
import { useMutation } from "@apollo/react-hooks";
import { useInput } from "../../utils";
import { toast } from "react-toastify";
import { toastOpt } from "../../common";

export default (props:any) => {

    const result : any = props.match.params;
    const nameId = result.name_id;
    let vulnerabilityListForDropdown = [];
    let inScopeTargetListForDropdown = [];
    const {data, loading} = useQuery(GET_REPORT_READY_PAGE, {variables:{nameId}});
    
    // setting for submit report
    const [submitReportMutation, {loading:submitLoading}] = useMutation(SUBMIT_REPORT);
    
    const [targetId, setTargetId] = useState();
    const [vId, setVId] = useState();
    const [attackComplexity, setAttackComplexity] = useState();
    const [requiredPriv, setRequiredPriv] = useState();
    const [userInteraction, setUserInteraction] = useState();
    const [confidentiality, setConfidentiality] = useState();
    const [integrity, setIntegrity] = useState();
    const [availablity, setAvailablity] = useState();
    const titleInput = useInput("");
    const locationInput = useInput("");
    const osInput = useInput("");
    const browserInput = useInput("");
    const browserVersionInput = useInput("");
    const descriptionInput = useInput("");
    const dumpInput = useInput("");
    const additionalTextInput = useInput("");

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const clickFunc = async () => {
        setButtonDisabled(true);
        const {
            data:{
                submitReport:submitReportResponse
            }
        } = await submitReportMutation({variables:{
            nameId,
            targetId,
            vId,
            attackComplexity,
            requiredPriv,
            userInteraction,
            confidentiality,
            integrity,
            availablity,
            //
            title:titleInput.value,
            location:locationInput.value,
            enviroment:osInput.value+"::"+browserInput.value+"::"+browserVersionInput.value,
            description:descriptionInput.value,
            dump:dumpInput.value,
            additionalText:additionalTextInput.value,
        }});


        if(!submitLoading){
            setDialogOpen(false);
            if(submitReportResponse!==null){
                toast("Submit Completed !", toastOpt as any);
                setTimeout(()=>{window.location.href = "/";}, 2000)
            } else {
                toast("There is an error", toastOpt as any);
                setButtonDisabled(false);
                
            }
        }
    }


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


        for(const type of uniquetypeList){
            const gOpt = {label:"", options:[] as any}
            gOpt.label = type;
            inScopeTargetListForDropdown.push(gOpt);
        }

        inScopeTargetListForDropdown.push({label:"OTHERS", options:[{value:-1,label:"Others"}]}); // for OTHERS

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
        

    }

    return <ReportPresenter
        // for query
        loading={loading}
        submitLoading={submitLoading}
        nameId={nameId}
        reportTipList={reportTipList}
        disclosurePolicy={disclosurePolicy}
        vulnerabilityList={vulnerabilityListForDropdown}
        openDate={openDate}
        closeDate={closeDate}
        inScopeTargetList={inScopeTargetListForDropdown}
        // for submit
        titleInput={titleInput}
        locationInput={locationInput}
        osInput={osInput}
        browserInput={browserInput}
        browserVersionInput={browserVersionInput}
        descriptionInput={descriptionInput}
        dumpInput={dumpInput}
        additionalTextInput={additionalTextInput}
        setTargetId={setTargetId}
        setVId={setVId}
        setAttackComplexity={setAttackComplexity}
        setRequiredPriv={setRequiredPriv}
        setUserInteraction={setUserInteraction}
        setConfidentiality={setConfidentiality}
        setIntegrity={setIntegrity}
        setAvailablity={setAvailablity}

        clickFunc={clickFunc}
        buttonDisabled={buttonDisabled}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
    />


}