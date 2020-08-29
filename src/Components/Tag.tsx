import React from "react";
import styled from "styled-components";

const TagWrapper = styled.div`
	white-space:nowrap;
	position:relative;
	margin-right:9px;
	display:inline-block;
	background:${props=>props.theme.lightGrayColor};
	line-height:30px;
    clip-path: polygon(100% 0%, 100% 48%, 100% 100%, 10% 100%, 0% 50%, 10% 0%);
`;


const TagText = styled.div`
    padding-left:1.3em;
    padding-right:0.9em;
    color:${props=>props.theme.darkGrayColor};
`;


export default ({
    text
}:any) => (
<TagWrapper>
    <TagText>{text}</TagText>
</TagWrapper>
)