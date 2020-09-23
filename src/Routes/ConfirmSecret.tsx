import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import { LOCAL_LOG_IN } from "../utils";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
export const CONFIRM_SECRET = gql`
    mutation confirmSecret(
    $authSecret: String!
    ){
        confirmSecret(
            authSecret:$authSecret
        ){
            ok
            token
            error
        }
    }

`;


export default (props:any) =>{

    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET);
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const result : any = props.match.params;
    const authSecret = result.key;

    useEffect(()=>{
        const confirmAndLogin = async () => {
        const {
            data:{
                confirmSecret:confirmSecretResponse
            }
        } = await confirmSecretMutation({variables:{
            authSecret
        }});

        
        const {
            ok,
            token
        } = confirmSecretResponse;
        if(ok===true||token!==null){
            await localLogInMutation({variables:{token}});
            window.location.href = "/profile";
        }
    }
    confirmAndLogin()
    },[]);
    return(
        <Redirect to="/"/>

    )
}


