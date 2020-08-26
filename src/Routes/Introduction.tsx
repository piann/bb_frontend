import React from "react";
import styled from "styled-components";
import mainImg from "../images/main.jpg";
import AdvButton from "../Components/AdvButton";
import Pdf from '../resources/What_is_bugbounty.pdf';
import groupImg from "../images/group.png";
import increaseImg from "../images/increase.png";
import clockImg from "../images/time.png";
import marketingImg from "../images/marketing.png";


const UpperBody = styled.div`
@font-face {
    font-family:'Source Serif Pro';
    src: url(${require("../resources/fonts/SourceSerifPro/SourceSerifPro-SemiBold.ttf")});   
}
@font-face {
        font-family:'Noto Serif KR';
        src: url(${require("../resources/fonts/NotoSerifKR/NotoSerifKR-Medium.otf")});   
}
width: 100%;
height: 750px;
position: absolute;
top: ${props => props.theme.headerBarHeight};
left:0;
right:0;
background-color: white;
background-image: url(${mainImg});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
`;

const MainText = styled.div`
    margin-top:60px;
    font-size:45px;
    font-family: 'Source Serif Pro', serif;
    display: flex;
    justify-content:center;
    align-items:center;
    animation: loading 3s alternate;
    @keyframes loading {
    0% {
        filter: blur(5px);
        opacity: 0;
    }
    100% {
        
        opacity: 1;
    }
    }
`;
const SubArea = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:calc(55px - 1vw);
`

const SubText = styled.div`
    font-size:16px;
    margin-bottom:30px;
    font-family: 'Noto Serif KR', serif;
`;

const MainBody = styled.div`
    position: relative;
    top: 750px;
    margin-top:100px;
    margin-bottom:100px;
    display: flex;
    flex-direction:row;
    align-items:center;
    display: grid;
	grid-template-columns: repeat(auto-fill, minmax(auto, 50%));
	grid-template-rows: 250px;
    grid-row-gap:100px;
`;

const DescBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const DescImg = styled.img`
    width:100px;
    height:100px;
    margin-bottom:30px;
`

const DescText= styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    font-family: 'Noto Serif KR', serif;

`;

export default () => {
    
    const openPdf = () => {

    }
    return (
    <>
    <UpperBody>
        <MainText>{"We connect security"}</MainText>
        <SubArea>
            <SubText>{"버그바운티는 협력을 통하여 보안문제를 해결하는 솔루션입니다."}</SubText>
            <a href = {Pdf} target = "_blank">
                <AdvButton text={"What is Bug Bounty?"} width={"200px"}/>
            </a>
        </SubArea>
    </UpperBody>
    <MainBody>
        <DescBox>
            <DescImg src={groupImg}/>
            <DescText>{"다양한 지식의 해커들이\n진단을 수행합니다."}</DescText>
        </DescBox>
        <DescBox>
            <DescImg src={increaseImg}/>
            <DescText>{"기존 취약점 진단 대비\n최대 6배의 취약점이 발견됩니다."}</DescText>
        </DescBox>
        <DescBox>
            <DescImg src={clockImg}/>
            <DescText>{"취약점 발견시간 및\n대응시간이 단축됩니다."}</DescText>
        </DescBox>
        <DescBox>
            <DescImg src={marketingImg}/>
            <DescText>{"보안에 자신있다는\n마케팅 요소로 활용됩니다."}</DescText>
        </DescBox>
    </MainBody>
    </>
    )
}


