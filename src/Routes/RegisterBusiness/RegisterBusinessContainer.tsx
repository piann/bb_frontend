import React,{MouseEvent, useState} from "react";
import SignUpPresenter from "./RegisterBusinessPresenter";
import { useInput } from "../../utils";
import { SEND_EMAIL_BUSINESS_ACCOUNT } from "./RegisterBusinessQueries";
import { useMutation } from "@apollo/react-hooks";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toastOpt} from "../../common";


export default () => {
    const email = useInput("");
    const realName = useInput("");
    const companyName = useInput("");
    const jobTitle = useInput("");
    const phone = useInput("");
    const companyImage = useInput("");
    const [submitting, setSubmitting] = useState(false);
    const [checkedPrivacy, setCheckedPrivacy] = useState(false);
    const [checkedTerm, setCheckedTerm] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [done, setDone] = useState(false);

    const [sendBusinessMail, {loading}] = useMutation(SEND_EMAIL_BUSINESS_ACCOUNT);


    const clickFunc = async (e:MouseEvent<HTMLButtonElement>) => {
        setSubmitting(true);
        e.preventDefault();
        const {
            data:{
                sendBusinessMail:sendBusinessMailResponse
            }
        } = await sendBusinessMail({variables:{
            email:email.value,
            realName:realName.value,
            companyName:companyName.value,
            jobTitle:jobTitle.value,
            phone:phone.value
        }});

        if(!loading){

            if(sendBusinessMailResponse===true){
                setDone(true);
                setTimeout(()=>{window.location.href = "/";}, 3000)
            } else {
                toast("There is an error", toastOpt as any);
                setSubmitting(false);
            }
        }
    }

    return <SignUpPresenter
    email={email}
    realName={realName}
    companyName={companyName}
    jobTitle={jobTitle}
    phone={phone}
    companyImage={companyImage}
    clickFunc={clickFunc}
    submitting={submitting}
    checkedPrivacy={checkedPrivacy}
    setCheckedPrivacy={setCheckedPrivacy}
    checkedTerm={checkedTerm}
    setCheckedTerm={setCheckedTerm}
    setButtonDisabled={setButtonDisabled}
    done={done}
    />


} 