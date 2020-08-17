import React, { MouseEvent } from "react";
import LogInPresenter from "./LogInPresenter";
import { useInput } from "../../utils";
import {LOCAL_LOG_IN, SIGN_IN} from "./LoginQueries";
import { useMutation } from "@apollo/react-hooks";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {css} from "glamor";
export default () => {

    // for toast css
    const toastOpt = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const email = useInput("");
    const password = useInput("");
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
    const [signInMutation] = useMutation(SIGN_IN);

    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        password.setValue("");
        e.preventDefault();
        const {
            data:{
                signIn:signInResponse
            }
        } = await signInMutation({variables:{
            email:email.value,
            password:password.value
        }});

        
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
            toast("Login Fail !", toastOpt as any);
        }
        
    }

    return <LogInPresenter
        email={email}
        password={password}
        clickFunc={clickFunc}
    />

}