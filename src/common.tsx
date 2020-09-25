import {isProduction} from "./.values";


export const toastOpt = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const statusDict = {
    0:"stand by",
    1:"in progress",
    2:"on assessment",
    3:"resolved"
} as any;


export const categoryUpperToNormal = {
    "WEB":"Web",
    "ANDROID":"Androird",
    "IOS":"IOS",
    "WINDOWS":"Windows",
    "LINUX":"Linux",
    "OTHERS":"Others"
} as any;

export const fileServerAddr = isProduction?"https://file.zerowhale.io/":"http://127.0.0.1:4002/"
export const backServerAddr = isProduction?"https://api.zerowhale.io/":"http://127.0.0.1:4001/"