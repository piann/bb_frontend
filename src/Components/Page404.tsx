import React from "react";
import styled from "styled-components";


const MainBody = styled.div`

@font-face {
    font-family:'Source Serif Pro';
    src: url(${require("../resources/fonts/SourceSerifPro/SourceSerifPro-SemiBold.ttf")});   
}
margin-top:70px;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const MainText = styled.div`
    font-size:130px;
    font-family: 'Source Serif Pro', serif;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-bottom:40px;
    color: ${props=>props.theme.darkGrayColor};
    text-shadow: 1px 1px 1px #777789,
        1px 2px 1px #777789,
        1px 2px 1px #777789,
        1px 3px 1px #777789,
        1px 3px 1px #777789,
        1px 4px 1px #777789,
        1px 4px 1px #777789,
        1px 5px 1px #777789,
        1px 5px 1px #777789,
        1px 6px 1px #777789,
        1px 6px 3px rgba(16,16,16,0.4),
        1px 8px 5px rgba(16,16,16,0.2),
        1px 10px 10px rgba(16,16,16,0.2),
        1px 12px 17px rgba(16,16,16,0.4);
`;


const SubText = styled.div`
    font-size:50px;
    font-family: 'Source Serif Pro', serif;
    margin-bottom:40px;
    color: ${props=>props.theme.darkGrayColor};
    
`;


const DescText= styled.div`
    word-break: keep-all;
    white-space: pre-line;
    font-family: 'Noto Serif KR', serif;
    font-size:18px;
    color: ${props=>props.theme.normalGrayColor};
`;

export default () => (
    <MainBody>
        <MainText>{"404"}</MainText>
        <SubText>{"PAGE NOT FOUND"}</SubText>
        <DescText>{"This is not the page you are looking for. ☹"}</DescText>
    </MainBody>
)


