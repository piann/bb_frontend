import { useState } from "react";
import {gql} from "apollo-boost";
import crypto from "crypto";

export const addCommaForMoney = (money:any) => money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const generateSaltedHash = (text:string):string => {
  const salt = "0w";
  const hashedPassword:string= crypto.createHmac('sha256',salt).update(text).digest('hex');
  return hashedPassword;

}

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

export const generateRandomStr = (len:number) => {
  const randHex = crypto.randomBytes(len).toString('hex');
  const randStr = parseInt(randHex,16).toString(36);
  return randStr;
}

export const getTimeGapStr = (startTime:any, finishTime:any) =>{
  try{
    const d1 = new Date(Date.parse(startTime));
    const d2 = new Date(Date.parse(finishTime));

    const d3 = new Date((d2 as any) - (d1 as any));

    if(d3 as any<0){ // finishTime should always latter than startTime
      return null;
    }

    const d0 = new Date(0);

    const dayGap = Math.floor((d3.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24))
    // dayGap is total difference, but h,m,s is just time diff
    var hourGap = Math.floor((d3.getTime() - d0.getTime()) / (1000 * 60 * 60)) - dayGap*24
    var minGap = Math.floor((d3.getTime() - d0.getTime()) / (1000 * 60 )) - (dayGap*24*60 + hourGap*60)

    if(dayGap >= 3){
      return `${dayGap}일`;
    } else if (dayGap >=1) {
      return `${dayGap}일 ${hourGap}시간`;
    } else {
      if(hourGap>=1){
        return `${hourGap}시간 ${minGap}분`;
      } else {
        if(minGap>=1){
          return `${minGap}분`;
        } else {
          return "0";
        }

      }
    }

  }catch{
    return null
  }

}

export const getBountyRangeText = (min:number,max:number):string =>{
  if(max===0){
    return "Credit Only";
  } else {
    if(min===0){
      return "Credit⠀~⠀₩".concat(addCommaForMoney(max));
    } else {
      return "₩"+addCommaForMoney(min)+"⠀~⠀₩"+addCommaForMoney(max);
    }
  }
}