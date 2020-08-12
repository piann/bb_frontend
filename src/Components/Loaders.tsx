import React from "react";
import styled from "styled-components";


const BarLoaderWrapper = styled.div`

    display: block;
    position: relative;
    height: 50px;
    width: 50px;


#barLoader span {
  position: absolute;
  display: block;
  bottom: 10px;
  width: 9px;
  height: 5px;
  background: rgba(0, 0, 0, 0.25);
  -webkit-animation: barLoader 1.5s  infinite ease-in-out;
          animation: barLoader 1.5s  infinite ease-in-out;
}

#barLoader span:nth-child(2) {
  left: 11px;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

#barLoader span:nth-child(3) {
  left: 22px;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}

#barLoader span:nth-child(4) {
  left: 33px;
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}

#barLoader span:nth-child(5) {
  left: 44px;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
}

@keyframes barLoader {
  0% {
    height: 5px;
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
  25% {
    height: 30px;
    -webkit-transform: translateY(15px);
            transform: translateY(15px);
    -webkit-transform: translateY(15px);
            transform: translateY(15px);
    background: #000000;
  }
  50% {
    height: 5px;
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    height: 5px;
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
}
@-webkit-keyframes barLoader {
  0% {
    height: 5px;
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
  25% {
    height: 30px;
    -webkit-transform: translateY(15px);
            transform: translateY(15px);
    background: #000000;
  }
  50% {
    height: 5px;
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    height: 5px;
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
}

`;


export const BarLoader = () => <BarLoaderWrapper>
    <div id='barLoader'>
    <span/>
    <span/>
    <span/>
    <span/>
    </div>
</BarLoaderWrapper>