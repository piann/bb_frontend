import React,{MouseEvent, useState} from "react";
import SignUpPresenter from "./SignUpPresenter";
import { useInput, generateSaltedHash } from "../../utils";
import { REGISTER_ACCOUNT} from "./SignUpQueries";
import { useMutation } from "@apollo/react-hooks";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toastOpt} from "../../common";


export default () => {
    const email = useInput("");
    const realName = useInput("");
    const nickName = useInput("");
    const password = useInput("");
    const passwordAgain = useInput("");
    const [submitting, setSubmitting] = useState(false);
    const [checkedPrivacy, setCheckedPrivacy] = useState(false);
    const [checkedTerm, setCheckedTerm] = useState(false);

    const [registerAccountMutation, {loading}] = useMutation(REGISTER_ACCOUNT);


    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        setSubmitting(true);
        e.preventDefault();
        const {
            data:{
                registerAccount:registerAccountResponse
            }
        } = await registerAccountMutation({variables:{
            email:email.value,
            password:generateSaltedHash(password.value),
            realName:realName.value,
            nickName:nickName.value
        }});


        if(!loading){

            if(registerAccountResponse===true){
                toast("Success to register !", toastOpt as any);
                setTimeout(()=>{window.location.href = "/";}, 2000)
            } else {
                toast("There is an error", toastOpt as any);
                setSubmitting(false);
            }
        }
    }

    return <SignUpPresenter
    email={email}
    realName={realName}
    nickName={nickName}
    password={password}
    passwordAgain={passwordAgain}
    clickFunc={clickFunc}
    submitting={submitting}
    checkedPrivacy={checkedPrivacy}
    setCheckedPrivacy={setCheckedPrivacy}
    checkedTerm={checkedTerm}
    setCheckedTerm={setCheckedTerm}
    />


}