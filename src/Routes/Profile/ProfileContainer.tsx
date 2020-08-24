import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";


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

    let 
    email,
    nickName,
    profilePictureId,
    reportInfoList;
    
    let isForbidden = false;

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
            isForbidden=true;
        }
    }


    return <ProfilePresenter
        loading={loading}
        isForbidden={isForbidden}
        email={email}
        nickName={nickName}
        profilePictureId={profilePictureId}
        reportInfoList={reportInfoList}
    />
}