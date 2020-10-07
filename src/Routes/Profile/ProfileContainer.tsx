import React, { useState } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { fileServerAddr, toastOpt } from "../../common";
import { toast } from "react-toastify";
import {GET_MY_PROFILE} from "./ProfileQueries";
import { useMutation } from "@apollo/react-hooks";
import {LOCAL_LOG_OUT} from "../../utils";


export default () => {

    const {data, loading} = useQuery(GET_MY_PROFILE);

    const [localLogOutMutation] = useMutation(LOCAL_LOG_OUT);
    const [uploading, setUploading] = useState(false);

    const clickFunc = async (e:any) => {
        await localLogOutMutation();
    }

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
    role,
    email,
    nickName,
    profilePictureId,
    credit,
    numOfVul,
    reportInfoList;


    if(!loading){
            const {
                getMyProfile:getMyProfileResponse
            } = data;

        if(getMyProfileResponse!==null){
            role = getMyProfileResponse.role;
            email = getMyProfileResponse.email;
            nickName = getMyProfileResponse.nickName;
            profilePictureId = getMyProfileResponse.profilePictureId;
            reportInfoList = getMyProfileResponse.reportInfoList;
            credit = getMyProfileResponse.credit;
            numOfVul = getMyProfileResponse.numOfVul;
            if(role==="BUSINESS"){

            } 
            if(role==="ADMIN"){

            }

        } else {
            return <Redirect to="/" />
        }
    }


    return <ProfilePresenter
        loading={loading}
        email={email}
        nickName={nickName}
        profilePictureId={profilePictureId}
        credit={credit}
        numOfVul={numOfVul}
        reportInfoList={reportInfoList}
        uploading={uploading}
        onChangeProfile={onChangeProfile}
        clickFunc={clickFunc}
    />
}