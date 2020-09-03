import React, { MouseEvent } from "react";
import EmailResendPresenter from "./EmailResendPresenter";
import { Redirect, RouteComponentProps } from "react-router-dom";
import {gql} from "apollo-boost";
import Page404 from "../../Components/Page404";
import { toastOpt } from "../../common";
import { toast, ToastContainer } from 'react-toastify';
import { Mutation } from '@apollo/client/react/components';

export const RESEND_MAIL = gql`
    mutation resendMail(
    $email: String!
    ){
        resendMail(
            email:$email
        )
    }
`;


interface IProps extends RouteComponentProps<any>{

}

interface IState{
    email:string;
    buttonDisabled:boolean;
}

class EmailResendContainer extends React.Component<IProps, IState>{

    constructor(props:IProps){
        super(props);
        let stateObj :any = props.location.state
        if(!stateObj){
            this.state = {
                email:"",
                buttonDisabled:true
            }
        }
        else{
            this.state = {
                email:stateObj.email,
                buttonDisabled:false
            } as any
        }
    }


    public render(){
        if(this.state.email===""){
            return <Page404/>
        } else {
            return (
            <Mutation 
                mutation={RESEND_MAIL} 
                variables={{email:this.state.email}}
                onCompleted={((data:any)=>{
                        this.setState({buttonDisabled:true});
                        const {
                                resendMail:resendMailResponse
                        } = data
                    
                        if(resendMailResponse===true){
                            toast("Send Email Success !", toastOpt as any);
                            setTimeout(()=>{window.location.href = "/";}, 2000)
                        } else {
                            toast("Send Email Fail ! ⛔", toastOpt as any);
                            this.setState({buttonDisabled:false});
                        }
                        
                    }
                )
                }
                >
                {(mutation:any, {loading}:any) =>(

                    <EmailResendPresenter
                    clickFunc={mutation}
                    loading={loading}
                    buttonDisabled={this.state.buttonDisabled}
                    />
                )
                }
            </Mutation>
            )
        }
    }

}

export default EmailResendContainer;