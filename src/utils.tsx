import React from "react";
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

export const LOCAL_LOG_OUT = gql`
mutation logUserOut{
  logUserOut @client
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


export const getTypeImage = (type:string):any =>{
  let imgComponent:any = "Others";
  const imgWidth="22px"
  if(type==="WEB"){
    imgComponent = <img width={imgWidth} src="data:image/png;base64,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" />    
  }
  else if(type==="ANDROID"){
    imgComponent = <img width={imgWidth} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAuNiA2LjM1YzAgLjE5My0uMTU2LjM0OS0uMzQ5LjM1LS4xOTQgMC0uMzUxLS4xNTctLjM1MS0uMzUgMC0uMTkzLjE1Ny0uMzUuMzUtLjM1cy4zNS4xNTcuMzUuMzV6bTMuMTUtLjM1Yy0uMTk0IDAtLjM1LjE1Ny0uMzUuMzVzLjE1Ni4zNDkuMzQ5LjM1Yy4xOTQgMCAuMzUxLS4xNTcuMzUxLS4zNSAwLS4xOTMtLjE1Ny0uMzUtLjM1LS4zNXptMTAuMjUtNnYyNGgtMjR2LTI0aDI0em0tMTYuOSA5LjgyOWMwLS41NjMtLjQ4Ny0xLjAzLTEuMDUtMS4wMjktLjU2NC0uMDAxLTEuMDUuNDY2LTEuMDUgMS4wM3Y0LjI3NGMwIC41NjQuNDg2Ljk5NiAxLjA1Ljk5Ni41NjMgMCAxLjA1LS40MzEgMS4wNS0uOTk2di00LjI3NXptOS4xLTEuMDI5aC04LjRsLjAwMSA2LjYxMWMwIC42MDMuNDg3IDEuMDg5IDEuMDkgMS4wODloLjMwOXYyLjQ3OWMwIC41NjMuNDk0IDEuMDIxIDEuMDU3IDEuMDIxLjU2NCAwIDEuMDQzLS40NTggMS4wNDMtMS4wMjF2LTIuNDc5aDEuNHYyLjQ3OWMwIC41NjMuNDk2IDEuMDIxIDEuMDU4IDEuMDIxLjU2NCAwIDEuMDQyLS40NTggMS4wNDItMS4wMjF2LTIuNDc5aC4zMTFjLjYwMSAwIDEuMDg5LS40ODcgMS4wODktMS4wOXYtNi42MXptMC0uNzAyYzAtMS41NzktLjg0My0yLjY2NC0yLjEzNC0zLjM4N2wuNjU4LTEuMzAxYy4wMzUtLjA2OC4wMTItLjE1NC0uMDUyLS4xOTMtLjA2NC0uMDM3LS4xNDQtLjAxMi0uMTc4LjA1N2wtLjY2NCAxLjMxNWMtMS4wNzItLjUxNi0yLjQ4MS0uNTY5LTMuNjYxIDBsLS42NjQtMS4zMTZjLS4wMzQtLjA2OC0uMTEzLS4wOTQtLjE3Ny0uMDU3LS4wNjQuMDM5LS4wODcuMTI1LS4wNTIuMTk0bC42NTggMS4zMDFjLTEuMjkxLjcyMy0yLjEzNCAxLjgwOS0yLjEzNCAzLjM4N2g4LjR6bTIuOCAxLjczMWMwLS41NjMtLjQ4Ni0xLjAzLTEuMDUtMS4wMjktLjU2My0uMDAxLTEuMDUuNDY2LTEuMDUgMS4wM3Y0LjI3NGMwIC41NjQuNDg2Ljk5NiAxLjA1Ljk5NnMxLjA1LS40MzEgMS4wNS0uOTk2di00LjI3NXoiLz48L3N2Zz4="></img>
      }
  else if(type==="IOS"){
    imgComponent = <img width={imgWidth} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQwNywwSDEwNUM0Ny4xMDMsMCwwLDQ3LjEwMywwLDEwNXYzMDJjMCw1Ny44OTcsNDcuMTAzLDEwNSwxMDUsMTA1aDMwMmM1Ny44OTcsMCwxMDUtNDcuMTAzLDEwNS0xMDVWMTA1ICAgIEM1MTIsNDcuMTAzLDQ2NC44OTcsMCw0MDcsMHogTTI3MC42ODMsMTAxLjI4NEMyOTMuNTQ4LDcxLjE0NywzMjUuMzM2LDcxLDMyNS4zMzYsNzFzNC43MjgsMjguMzMzLTE3Ljk4Nyw1NS42MjggICAgYy0yNC4yNTQsMjkuMTQ1LTUxLjgyMywyNC4zNzUtNTEuODIzLDI0LjM3NVMyNTAuMzUsMTI4LjA4MiwyNzAuNjgzLDEwMS4yODR6IE0zMjAuODA5LDQxOC40ODkgICAgYy0yMC4zMzMsMC0zNi4xMzktMTMuNzAyLTU3LjU2Mi0xMy43MDJjLTIxLjgzMSwwLTQzLjQ5NiwxNC4yMTMtNTcuNjA1LDE0LjIxM2MtNDAuNDIzLDAtOTEuNDkxLTg3LjUwNC05MS40OTEtMTU3Ljg0MiAgICBjMC02OS4yMDQsNDMuMjI2LTEwNS41MDcsODMuNzcxLTEwNS41MDdjMjYuMzU3LDAsNDYuODExLDE1LjIsNjAuNTEzLDE1LjJjMTEuNzY0LDAsMzMuNTk0LTE2LjE2OSw2Mi4wMTEtMTYuMTY5ICAgIGM0OC45MTUsMCw2OC4xNTcsMzQuODA2LDY4LjE1NywzNC44MDZzLTM3LjYzNSwxOS4yNDItMzcuNjM1LDY1LjkzMmMwLDUyLjY3MSw0Ni44ODMsNzAuODIzLDQ2Ljg4Myw3MC44MjMgICAgUzM2NS4wNzYsNDE4LjQ4OSwzMjAuODA5LDQxOC40ODl6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
  }
  else if(type==="WINDOWS"){
    imgComponent = <img width={imgWidth} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE0LjQwMiAxNC40MDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBvbHlnb24gc3R5bGU9IiIgcG9pbnRzPSIwLDcuODk2IDAsMTIuMDkxIDUuOTg5LDEyLjk1MSA1Ljk4OSw3Ljg5NiAgICIgZmlsbD0iIzAzMDEwNCIgZGF0YS1vcmlnaW5hbD0iIzAzMDEwNCI+PC9wb2x5Z29uPgoJCTxwb2x5Z29uIHN0eWxlPSIiIHBvaW50cz0iNS45ODksMS40NTIgMCwyLjMxMiAwLDYuNTA3IDUuOTg5LDYuNTA3ICAgIiBmaWxsPSIjMDMwMTA0IiBkYXRhLW9yaWdpbmFsPSIjMDMwMTA0Ij48L3BvbHlnb24+CgkJPHBvbHlnb24gc3R5bGU9IiIgcG9pbnRzPSIxNC40MDIsNi41MDcgMTQuNDAyLDAuMTczIDcuMzc5LDEuMTgxIDcuMzc5LDYuNTA3ICAgIiBmaWxsPSIjMDMwMTA0IiBkYXRhLW9yaWdpbmFsPSIjMDMwMTA0Ij48L3BvbHlnb24+CgkJPHBvbHlnb24gc3R5bGU9IiIgcG9pbnRzPSI3LjM3OSwxMy4yMjIgMTQuNDAyLDE0LjIyOSAxNC40MDIsNy44OTYgNy4zNzksNy44OTYgICAiIGZpbGw9IiMwMzAxMDQiIGRhdGEtb3JpZ2luYWw9IiMwMzAxMDQiPjwvcG9seWdvbj4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
  }
  else if(type==="LINUX"){
    imgComponent = <img width={imgWidth} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4NSA0ODUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTEzOS4xNTcsMzgzLjA1M2MxNi42MTMsMS45ODQsMzUuMjc5LDEyLjc0Niw1MC45LDE0LjY0NmMxNS43MDUsMS45ODMsMjAuNTY1LTEwLjY5NSwyMC41NjUtMTAuNjk1ICAgczE3LjY3My0zLjk1MSwzNi4yNTMtNC40MDZjMTguNTk4LTAuNTIxLDM2LjIwMywzLjg2OCwzNi4yMDMsMy44NjhzMy40MTQsNy44MTksOS43ODcsMTEuMjMzICAgYzYuMzczLDMuNDgsMjAuMDk0LDMuOTUxLDI4Ljg4OC01LjMxNGM4LjgxMS05LjMzMiwzMi4zMTktMjEuMDg3LDQ1LjUxOS0yOC40MzVjMTMuMjg0LTcuMzY1LDEwLjg0Ni0xOC41OTcsMi41MDYtMjIuMDExICAgYy04LjM0LTMuNDEzLTE1LjE2Ny04Ljc5NC0xNC42NDYtMTkuMTE5YzAuNDU0LTEwLjI0LTcuMzY1LTE3LjA2Ny03LjM2NS0xNy4wNjdzNi44NDQtMjIuNTMyLDAuNDcxLTQxLjE5NyAgIGMtNi4zNzMtMTguNTgtMjcuMzkyLTQ4LjQ2MS00My41NTEtNzAuOTI2Yy0xNi4xNTktMjIuNTMyLTIuNDM5LTQ4LjU0NS0xNy4xNTEtODEuNzg5Yy0xNC43MTQtMzMuMjk0LTUyLjg2Ny0zMS4zMjYtNzMuNDMyLTE3LjEzNSAgIGMtMjAuNTY1LDE0LjE5Mi0xNC4yNiw0OS4zODYtMTMuMjY4LDY2LjA4NGMwLjk5MiwxNi42MTMsMC40NTQsMjguNTAxLTEuNDQ2LDMyLjc3M2MtMS45LDQuMzM4LTE1LjE2NywyMC4wOTQtMjMuOTc4LDMzLjI5NCAgIGMtOC43OTQsMTMuMjY3LTE1LjE2OCw0MC42NTktMjEuNjA4LDUxLjk1OWMtNi4zMDYsMTEuMjMzLTEuOSwyMS40NzMtMS45LDIxLjQ3M3MtNC40MDUsMS41MTMtNy44ODYsOC44NzkgICBjLTMuNDE0LDcuMjgxLTEwLjI0MSwxMC43NjEtMjIuNTMzLDEzLjEzM2MtMTIuMjA4LDIuNTA1LTEyLjIwOCwxMC4zNzUtOS4yNjUsMTkuMTg2YzIuOTU5LDguNzk0LDAsMTMuNzIxLTMuNDE0LDI0Ljk1NCAgIEMxMDUuMzkzLDM3Ny42NzIsMTIyLjQ3NywzODEuMDg1LDEzOS4xNTcsMzgzLjA1M3ogTTMxMS44NDksMzMxLjgxNmM4LjcyNywzLjgxNywyMS4yNzEtMS40OTcsMjUuMDg4LTUuMzE0ICAgYzMuODAxLTMuOCw2LjQ5MS05LjQ1LDYuNDkxLTkuNDVzMy44MTcsMS45LDMuNDMsNy45MzZjLTAuNDA0LDYuMTIxLDIuNjIzLDE0Ljg0OCw4LjM0LDE3Ljg3NSAgIGM1LjcxNywzLjAxLDE0LjQ0NCw3LjIxMyw5LjkyMSwxMS40MTdjLTQuNjA4LDQuMjA0LTMwLjA5OSwxNC40NjEtMzcuNzE2LDIyLjQ2NWMtNy41NSw3Ljk1My0xNy40NzEsMTQuNDYxLTIzLjUwOCwxMi41NDQgICBjLTYuMTAzLTEuOS0xMS40MzQtMTAuMjQtOC44MS0yMi40NDhjMi43MDctMTIuMTU3LDQuOTk0LTI1LjQ5Miw0LjYwNy0zMy4xMDljLTAuNDAzLTcuNjE3LTEuOS0xNy44NzQsMC0xOS4zODggICBjMS45LTEuNDk3LDQuOTI3LTAuNzc0LDQuOTI3LTAuNzc0UzMwMy4xMDQsMzI4LjAxNywzMTEuODQ5LDMzMS44MTZ6IE0yNTUuMjE2LDEyNi4wMzNjOC40MDcsMCwxNS4xODQsOC4zNCwxNS4xODQsMTguNTk3ICAgYzAsNy4yODEtMy40MTQsMTMuNTg3LTguNDA4LDE2LjYxNGMtMS4yNjEtMC41MjEtMi41NzMtMS4xMS00LjAxOS0xLjcxNmMzLjAyNy0xLjQ5Niw1LjEyOC01LjMxMyw1LjEyOC05LjcxOSAgIGMwLTUuNzY3LTMuNTQ3LTEwLjUwOS04LjAwNC0xMC41MDljLTQuMzM4LDAtNy45NTQsNC43NDEtNy45NTQsMTAuNTA5YzAsMi4xMDMsMC41MjIsNC4yMDQsMS4zNzksNS44NTIgICBjLTIuNjIzLTEuMDYtNC45OTQtMS45NjctNi44OTQtMi42OWMtMC45OTItMi41MDYtMS41ODEtNS4zMzEtMS41ODEtOC4zNEMyNDAuMDQ4LDEzNC4zNzQsMjQ2LjgwNywxMjYuMDMzLDI1NS4yMTYsMTI2LjAzM3ogICAgTTIzNC4zOTgsMTU4LjA4M2M0LjEzNywwLjcyMywxNS41MDMsNS42NSwxOS43MDgsNy4xNjNjNC4yMDQsMS40NDYsOC44NjEsNC4xMzYsOC40MDcsNi44MjdjLTAuNTIxLDIuNzc0LTIuNjksMi43NzQtOC40MDcsNi4yNTUgICBjLTUuNjUsMy40MTQtMTcuOTkyLDExLjAzMS0yMS45NDQsMTEuNTUyYy0zLjkzNSwwLjUyMS02LjE3MS0xLjY5OS0xMC4zNzYtNC40MDZjLTQuMjA0LTIuNzU4LTEyLjA4OS05LjE5OC0xMC4xMDYtMTIuNjExICAgYzAsMCw2LjE3MS00LjcyNSw4Ljg2Mi03LjE0NkMyMjMuMjMzLDE2My4yMTEsMjMwLjE5NCwxNTcuMzA5LDIzNC4zOTgsMTU4LjA4M3ogTTIxNi4yNzEsMTI4Ljk5MyAgIGM2LjYyNSwwLDEyLjAyMyw3Ljg4NiwxMi4wMjMsMTcuNjA1YzAsMS43NjYtMC4yMDIsMy40MTMtMC41MjEsNS4wNjFjLTEuNjQ4LDAuNTIxLTMuMjk1LDEuMzc5LTQuODc3LDIuNzU4ICAgYy0wLjc3MywwLjY1Ni0xLjQ5NywxLjI0NC0yLjE1MiwxLjljMS4wNDItMS45NjcsMS40NDYtNC43OTIsMC45NzUtNy43NTJjLTAuOTA4LTUuMjQ2LTQuNDU2LTkuMTMtNy45MzctOC42MDkgICBjLTMuNDk4LDAuNTg5LTUuNTgzLDUuMzk4LTQuNzQyLDEwLjcxMmMwLjkyNSw1LjM4MSw0LjQwNSw5LjI2NCw3Ljk1Myw4LjY3NmMwLjIwMi0wLjA2NywwLjM4Ny0wLjEzNCwwLjU4OS0wLjIwMiAgIGMtMS42OTgsMS42NDgtMy4yNzksMy4wOTQtNC45MjcsNC4yNzFjLTQuNzkyLTIuMjM3LTguMzQtOC45MjktOC4zNC0xNi44MTVDMjA0LjMxNiwxMzYuODEyLDIwOS42MjksMTI4Ljk5MywyMTYuMjcxLDEyOC45OTN6ICAgIE0xNzkuMzYyLDI1Ni4yMTZjNi44MjctMTAuNzYxLDExLjIzMi0zNC4yODYsMTguMDU5LTQyLjEwNWM2Ljg5NS03LjgwMiwxMi4yMDgtMjQuNDMyLDkuNzg3LTMxLjc4ICAgYzAsMCwxNC43MTMsMTcuNjA1LDI0Ljk1NCwxNC43MTNjMTAuMjU3LTIuOTYsMzMuMzExLTIwLjA5NCwzNi43MjQtMTcuMTUxYzMuNDE0LDIuOTU5LDMyLjc3Myw2Ny41MjksMzUuNzMyLDg4LjA5NCAgIGMyLjk2LDIwLjU0OC0xLjk2NywzNi4yNTQtMS45NjcsMzYuMjU0cy0xMS4yMzItMi45Ni0xMi42NzksMy44NjdjLTEuNDQ2LDYuODk0LTEuNDQ2LDMxLjg2NS0xLjQ0NiwzMS44NjUgICBzLTE1LjE4NCwyMS4wMTktMzguNjkyLDI0LjQ5OWMtMjMuNTA4LDMuNDE0LTM1LjI3OSwwLjkyNS0zNS4yNzksMC45MjVsLTEzLjItMTUuMTE3YzAsMCwxMC4yNTgtMS41MTMsOC44MTEtMTEuODIxICAgYy0xLjQ0Ni0xMC4yNC0zMS4zNDQtMjQuNDMzLTM2LjcyNS0zNy4xNzlDMTY4LjA2MiwyODguNTM0LDE3Mi40NTEsMjY2Ljk5NCwxNzkuMzYyLDI1Ni4yMTZ6IE0xMjEuMjMyLDMzMy4zMyAgIGMxLjE3Ny01LjA0NCwxNi40MTEtNS4wNDQsMjIuMjYzLTguNTkyYzUuODUyLTMuNTQ4LDcuMDI4LTEzLjczOCwxMS43NTQtMTYuNDI4YzQuNjU3LTIuNzU4LDEzLjI2Nyw3LjAyOSwxNi44MTUsMTIuNTQzICAgYzMuNDgxLDUuMzgxLDE2LjgxNiwyOC45MDYsMjIuMjY0LDM0Ljc1N2M1LjUxNSw1LjkwMiwxMC41NzcsMTMuNzIxLDguOTk2LDIwLjc1Yy0xLjQ5Niw3LjAyOC05Ljc4NiwxMi4xNTctOS43ODYsMTIuMTU3ICAgYy03LjQxNSwyLjI4Ny0yOC4wOTgtNi42NDItMzcuNDk3LTEwLjU3N2MtOS4zOTktMy45NTEtMzMuMzExLTUuMTI5LTM2LjM4OC04LjYwOWMtMy4xNjEtMy41NDgsMS41MTMtMTEuMzY3LDIuNzU3LTE4Ljc4MyAgIEMxMjMuNTE5LDM0My4wNDksMTIwLjAzOSwzMzguMzkxLDEyMS4yMzIsMzMzLjMzeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPHBhdGggZD0iTTAsMHY0ODVoNDg1VjBIMHogTTQ1NSw0NTVIMzBWMzBoNDI1VjQ1NXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
  }

  return imgComponent;

}

export const truncateLongStr = (longStr:string, index:number):string => {
  if(longStr.length <= index){
    return longStr
  } else {
    return longStr.substring(0,index)+ "...";
  }


}