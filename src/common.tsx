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

export const fileServerAddr = "http://172.31.5.94:4002/";