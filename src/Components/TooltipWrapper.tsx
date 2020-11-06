import React from "react";
import styled from "styled-components";

const TooltipWrapper = styled.span`
&:hover {
	position: relative;
}

&:after {
	-webkit-transition: bottom .3s ease-in-out, opacity .3s ease-in-out;
	-moz-transition: bottom .3s ease-in-out, opacity .3s ease-in-out;
	transition: bottom .3s ease-in-out, opacity .3s ease-in-out;

	background-color: rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
	-moz-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
	box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
    -webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	
    color: #FFFFFF;
	font-size: 14px;
	margin-bottom: 10px;
	padding: 7px 12px;
	position: absolute;
	width: max-content;
	min-width: 100px;
	max-width: 80vw;
	z-index: 20;
	opacity: 0;
    top: 30px;
	content: attr(data-tooltip-text);
    text-align:left;
    word-break:keep-all;
    white-space:pre-line;
    line-height:1.3em;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size:12px;
        word-break: break-word;
    }

}

&:hover:after {
	top: 30px;
	left: 0;
	opacity: 1;
}
`

export default TooltipWrapper;