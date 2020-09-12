import React, { useState } from "react";
import ProfilePresenter from "./ProfilePresenter";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { fileServerAddr, toastOpt } from "../../common";
import { toast } from "react-toastify";

export const GET_MY_PROFILE = gql`
    query getMyProfile{
        getMyProfile{
            email
            nickName
            profilePictureId
            reportInfoList{
                reportId
                status
                result
                companyName
                submitDate
                vulName
            }
        }
    }
`;


export default () => {
    const {data, loading} = useQuery(GET_MY_PROFILE);

    const [uploading, setUploading] = useState(false);

    const onChangeProfile = async (e:any) => {
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
            url: fileServerAddr.concat("upload_profile"),
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
    email,
    nickName,
    profilePictureId,
    reportInfoList;
    

    if(!loading){
        const {
            getMyProfile:getMyProfileResponse
        } = data;
    if(getMyProfileResponse!==null){

        email = getMyProfileResponse.email;
        nickName = getMyProfileResponse.nickName;
        profilePictureId = getMyProfileResponse.profilePictureId;
        reportInfoList = getMyProfileResponse.reportInfoList;
        } else {
            return <Redirect to="/" />
        }
    }


    return <ProfilePresenter
        loading={loading}
        email={email}
        nickName={nickName}
        profilePictureId={profilePictureId}
        reportInfoList={reportInfoList}
        uploading={uploading}
        onChangeProfile={onChangeProfile}
    />
}