import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";

const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:flex;
    flex-direction:column;
`;

const ThereIsNoNotice = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom:20px;
    font-weight:600;
`

export default ({
    nameId,
}:any) =>(
<>
<BBPBanner nameId={nameId}/>
<BBPSubMenu menuIdx={2} nameId={nameId}/>
<BBPBody>
    <InformationBox>
        <InformationTitle>{"List"}</InformationTitle>
        <InformationContent>
            <ThereIsNoNotice>{"공지사항이 없습니다."}</ThereIsNoNotice>
        </InformationContent>
    </InformationBox>
</BBPBody>

</>
)