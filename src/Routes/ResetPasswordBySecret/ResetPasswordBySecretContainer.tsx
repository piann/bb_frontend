import React, { useState, MouseEvent } from "react";
import { Redirect } from "react-router-dom";
import { useInput, generateSaltedHash } from "../../utils";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Page404 from "../../Components/Page404";
import ResetPasswordBySecretPresenter from "./ResetPasswordBySecretPresenter";
import { toast } from "react-toastify";
import {toastOpt} from "../../common";

export const RESET_PASSWORD_BY_SECRET = gql`
    mutation resetPasswordBySecret(
        $key:String!
        $newPassword:String!
    ){
        resetPasswordBySecret(
            key:$key
            newPassword:$newPassword
        )
    }

`;



export default (props:any) => {

    const result : any = props.match.params;
    const key = result.key;
    if(key.length!==6+25+84){
        return <Page404/>
    }

    const [submitting, setSubmitting] = useState(false);
    const password = useInput("");
    const passwordAgain = useInput("");

    const [resetPasswordBySecretMutation, {loading}] = useMutation(RESET_PASSWORD_BY_SECRET);

    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        setSubmitting(true);
        e.preventDefault();
        const {
            data:{
                resetPasswordBySecret:resetPasswordBySecretResponse
            }
        } = await resetPasswordBySecretMutation({variables:{
            key,
            newPassword:generateSaltedHash(password.value),
        }});


        if(!loading){

            if(resetPasswordBySecretResponse===true){
                toast("Try to login again !", toastOpt as any);
                setTimeout(()=>{window.location.href = "/";}, 1500)
            } else {
                toast("There is an error", toastOpt as any);
                setSubmitting(false);
            }
        }
    }


    return <ResetPasswordBySecretPresenter
        password={password}
        passwordAgain={passwordAgain}
        clickFunc={clickFunc}
        submitting={submitting}
    />
}