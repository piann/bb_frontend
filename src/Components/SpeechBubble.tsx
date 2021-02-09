import React from "react";
import styled from "styled-components";


interface ContainerProps{
    maxWidth?:string;
}

interface SpeechProps{
    maxWidth?:string;
    text?:string;
}

const LSpeechBubbleContainer = styled.div<ContainerProps>`
    position:relative;
    color:white;
	background: ${props=>props.theme.darkGrayColor};
    padding: 18px 18px;
	border-radius: .4em;
    min-height:60px;
    max-width: calc(100% - 130px);
    word-break: break-all;
    letter-spacing: 0.08em;
    line-height: 2em;
    display: flex;
    align-items:center;
    &:after {
	content: '';
	position: absolute;
	left: 0;
	top: 12px;
	width: 0;
	height: 0;
	border: 18px solid transparent;
	border-right-color:${props=>props.theme.darkGrayColor};
	border-left: 0;
	border-top: 0;
	margin-top: 5px;
	margin-left: -18px;
}
`;


const RSpeechBubbleContainer = styled.div<ContainerProps>`
    position:relative;
    color:${props=>props.theme.headerBarColor};
	background: ${props=>props.theme.lightGrayColor};
    padding: 18px 18px;
	border-radius: .4em;
    min-height:60px;
    max-width: calc(100% - 130px);
    word-break: break-all;
    letter-spacing: 0.08em;
    line-height: 2em;
    display: flex;
    align-items:center;
    &:after {
	content: '';
	position: absolute;
	right: 0;
	top: 12px;
	width: 0;
	height: 0;
	border: 18px solid transparent;
	border-left-color:${props=>props.theme.lightGrayColor};
	border-right: 0;
	border-top: 0;
	margin-top: 5px;
	margin-right: -18px;
}

`;




export const LSpeechBubble:React.SFC<SpeechProps> = ({
    maxWidth,
    text
}) => <LSpeechBubbleContainer maxWidth={maxWidth}>{text}</LSpeechBubbleContainer>



export const RSpeechBubble:React.SFC<SpeechProps> = ({
    maxWidth,
    text
}) => <RSpeechBubbleContainer maxWidth={maxWidth}>{text}</RSpeechBubbleContainer>






