import { useState } from "react";


export const checkOnlyNormalChars = (target:string):boolean => {
    const reg = /^[a-zA-Z0-9_]+$/;
    const result = reg.test(target);
    return result;
}

export const checkEmailChars = (target:string):boolean => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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