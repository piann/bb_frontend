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
    2:"on judge",
    3:"resolved"
} as any;


export const categoryUpperToNormal = {
    "WEB":"Web",
    "ANDROID":"Android",
    "IOS":"IOS",
    "WINDOWS":"Windows",
    "LINUX":"Linux",
    "OTHERS":"Others"
} as any;

export const fileServerAddr = isProduction?"https://file.zerowhale.io/":"http://127.0.0.1:4002/"
export const backServerAddr = isProduction?"https://api.zerowhale.io/":"http://127.0.0.1:4001/"

export const exampleReportMarkDown = `
(리포트 예시, 더 나은 양식으로 작성하여도 무관합니다)
.
#### 발견 과정

(취약점을 어떻게 발견하였는지에 대한 설명 ex) fuzzing, code auditing 등)
* * *
#### Description

(해당 취약점에 대한 기술적 설명 및 해당 서비스에서 적용될 수 있었던 이유, 취약점이 일어난 원인) 

* * *

#### 취약점 재현
1. (취약점 재현을 위해 해야할 일 1단계 설명) 
2. (취약점 재현을 위해 해야할 일 2단계 설명)
3. (취약점 재현을 위해 해야할 일 3단계 설명)
4. (취약점 재현을 위해 해야할 일 n단계 설명 ...)
.
.
.

**재현 시 주의사항**

* (주의해야하는 사항이 있다면 설명)

* * *

#### 해당 취약점이 가질 수 있는 파급력

(공격자가 실행 가능한 시나리오 및 그 결과로 미칠 파급력, 실행될 수 있는 가능성 등 설명)

* * *

#### PoC Code (페이지 부족할 경우 파일로 첨부)
\`\`\`
#!/bin/python
import requests

print("This is example code");

\`\`\`
`;