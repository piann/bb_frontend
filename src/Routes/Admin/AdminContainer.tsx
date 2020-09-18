import React, { useState } from "react";
import AdminPresenter from "./AdminPresenter";
import { useQuery } from "@apollo/client";
import {GET_ALL_COMPANY_LOGOS} from "./AdminQueries"
import axios from "axios";
import { fileServerAddr, toastOpt } from "../../common";
import { toast } from "react-toastify";
import Page404 from "../../Components/Page404";


export default () => {

    const {data, loading} = useQuery(GET_ALL_COMPANY_LOGOS);
    const [uploading, setUploading] = useState(false);

    const onChangeLogo = async (e:any) => {
        const companyId = e.target.alt;
        
        setUploading(true);
        const fileObjList = e.target.files;
        
        if(fileObjList===null ||fileObjList.length===0){
            toast("Error", toastOpt as any);
            setUploading(false);
            return;
        }

        if(fileObjList[0].size >= 8*1024*1024){// 8mb limit
            toast("File Size Limit : 8mb", toastOpt as any);
            setUploading(false);
            return;
        } 
        const jwt = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("streamfile", fileObjList[0] as any);
        formData.append("jwt", jwt as any);
    
        const res = await axios({
            method: "post",
            url: `${fileServerAddr}upload_logo/${companyId}/`,
            data: formData,
            headers: {
            Authorization: jwt,
            "Content-Type" : "multipart/form-data",
            },
        });

        setUploading(false);
        window.location.reload();
        
     }

    let 
    infoList;
    

    if(!loading){
            const {
                getAllCompanyLogos:getAllCompanyLogosResponse
            } = data;
        if(getAllCompanyLogosResponse!==null){
            infoList = getAllCompanyLogosResponse;

        } else {
            return <Page404 />
        }
    }


    return <AdminPresenter
        loading={loading}
        infoList={infoList}
        uploading={uploading}
        onChangeLogo={onChangeLogo}
    />
}