import React, { useState, MouseEvent } from "react";
import { Redirect } from "react-router-dom";
import { useInput, generateSaltedHash } from "../../utils";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Page404 from "../../Components/Page404";
import SendPasswordResetEmailPresenter from "./SendPasswordResetEmailPresenter";
import { toast } from "react-toastify";
import {toastOpt} from "../../common";

export const SEND_PASSWORD_RESET_MAIL = gql`
    mutation sendPasswordResetMail(
        $email:String!
    ){
        sendPasswordResetMail(
            email:$email
        )
    }

`;



export default (props:any) => {

    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);
    const email = useInput("");

    const [sendPasswordResetMailMutation, {loading}] = useMutation(SEND_PASSWORD_RESET_MAIL);

    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        setSubmitting(true);
        e.preventDefault();
        const {
            data:{
                sendPasswordResetMail:sendPasswordResetMailResponse
            }
        } = await sendPasswordResetMailMutation({variables:{
            email:email.value,
        }});

        if(!loading){

            if(sendPasswordResetMailResponse===true){
                setDone(true);
            } else {
                toast("There is an error", toastOpt as any);
                setSubmitting(false);
            }
        }
    }

    return <SendPasswordResetEmailPresenter
        email={email}
        clickFunc={clickFunc}
        submitting={submitting}
        done={done}
    />
}