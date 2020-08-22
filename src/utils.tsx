import { useState } from "react";
import {gql} from "apollo-boost";

export const checkOnlyNormalChars = (target:string):boolean => {
    const reg = /^[a-zA-Z0-9_]+$/;
    const result = reg.test(target);
    return result;
}

export const checkOnlyLowerNormalChars = (target:string):boolean => {
    const reg = /^[a-z0-9_]+$/;
    const result = reg.test(target);
    return result;
}

export const checkEmailChars = (target:string):boolean => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = reg.test(target);
    return result;
}

export const checkComplexPassword = (target:string):boolean => {
    const reg = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[A-z])(?=(.*)).{8,}/
    const result = reg.test(target);
    return result;
}

export const useInput = (defaultValue:any) => {
    const [value, setValue] = useState(defaultValue);
  
    const onChange = (e:any) => {
      const {
        target: { value }
      } = e;
      setValue(value);
    };
  
    return { value, onChange, setValue };
  };


export const LOCAL_LOG_IN = gql`
mutation logUserIn($token: String!) {
  logUserIn(token: $token) @client
}
`;


export const dateStringToDotFormat = (dateString:any) =>{
    const res = dateString.slice(0,10).replace(/-/g,".");
    return res;
}