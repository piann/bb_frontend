import React, { MouseEvent, useState } from "react";
import LogInPresenter from "./LogInPresenter";
import { useInput, LOCAL_LOG_IN } from "../../utils";
import {SIGN_IN} from "./LoginQueries";
import { useMutation } from "@apollo/react-hooks";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toastOpt} from "../../common";

export default () => {

    // for toast css

    const email = useInput("");
    const password = useInput("");
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
    const [signInMutation,{loading}] = useMutation(SIGN_IN);
    const [submitting, setSubmitting] = useState(false);

    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        password.setValue("");
        setSubmitting(true);
        const {
            data:{
                signIn:signInResponse
            },
        } = await signInMutation({variables:{
            email:email.value,
            password:password.value
        }});

        if(!loading){

            const {
                ok,
                error,
                token
            } = signInResponse;
            if(ok===true||token!==null){
                await localLogInMutation({variables:{token}});
                toast("Login Success !", toastOpt as any);
                setTimeout(()=>{window.location.href = "/";}, 2000)
                
            } else {
                setSubmitting(false);
                toast("Login Fail !", toastOpt as any);
            }
            //// u must add case for locked NEW_ACCOUNT
        }
    }

    return <LogInPresenter
        email={email}
        password={password}
        clickFunc={clickFunc}
        submitting={submitting}
    />

}