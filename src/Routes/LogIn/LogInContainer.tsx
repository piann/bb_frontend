import React, { MouseEvent, useState } from "react";
import LogInPresenter from "./LogInPresenter";
import { useInput, LOCAL_LOG_IN, generateSaltedHash } from "../../utils";
import {SIGN_IN} from "./LoginQueries";
import { useMutation } from "@apollo/react-hooks";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toastOpt} from "../../common";

export default (props:any) => {

    // for toast css
    const {history} = props;

    const email = useInput("");
    const password = useInput("");
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
    const [signInMutation,{loading}] = useMutation(SIGN_IN);
    const [submitting, setSubmitting] = useState(false);

    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        password.setValue("");
        console.log(generateSaltedHash(password.value));////
        setSubmitting(true);
        const {
            data:{
                signIn:signInResponse
            },
        } = await signInMutation({variables:{
            email:email.value,
            password:generateSaltedHash(password.value)
        }});

        if(!loading){

            const {
                ok,
                error,
                token
            } = signInResponse;
            if(ok===true||token!==null){
                await localLogInMutation({variables:{token}});
                /*
                history.push({
                    pathname: '/',
                });
                */
                window.location.href = "/profile";
                
                
            } else if(ok===false&&error==="NEW_ACCOUNT"&&token===null){

                history.push({
                    pathname: '/reauth',
                    state: { email:email.value }
                  });


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