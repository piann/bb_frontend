import React, { useState, MouseEvent } from "react";
import { Redirect } from "react-router-dom";
import { useInput, generateSaltedHash } from "../../utils";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Page404 from "../../Components/Page404";
import EditPasswordPresenter from "./EditPasswordPresenter";
import { toast } from "react-toastify";
import {toastOpt} from "../../common";

export const MODIFY_PASSWORD = gql`
    mutation modifyPassword(
        $oldPassword:String!
        $newPassword:String!
    ){
        modifyPassword(
            oldPassword:$oldPassword
            newPassword:$newPassword
        )
    }

`;



export default (props:any) => {

    const [submitting, setSubmitting] = useState(false);
    const oldPassword = useInput("");
    const newPassword = useInput("");
    const newPasswordAgain = useInput("");

    const [modifyPasswordMutation, {loading}] = useMutation(MODIFY_PASSWORD);

    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        setSubmitting(true);
        e.preventDefault();
        const {
            data:{
                modifyPassword:modifyPasswordResponse
            }
        } = await modifyPasswordMutation({variables:{
            oldPassword:generateSaltedHash(oldPassword.value),
            newPassword:generateSaltedHash(newPassword.value),
        }});


        if(!loading){

            if(modifyPasswordResponse===true){
                toast("Success to edit password", toastOpt as any);
                setTimeout(()=>{window.location.href = "/";}, 2000)
            } else {
                toast("There is an error", toastOpt as any);
                setSubmitting(false);
            }
        }
    }


    return <EditPasswordPresenter
        oldPassword={oldPassword}
        newPassword={newPassword}
        newPasswordAgain={newPasswordAgain}
        clickFunc={clickFunc}
        submitting={submitting}
    />
}