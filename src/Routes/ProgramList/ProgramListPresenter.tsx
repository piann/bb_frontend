import React from "react";
import styled from "styled-components";
import Tag from "../../Components/Tag";
import categoryIcon from "../../images/category.png";
import wonIcon from "../../images/won.png";
import zeroWhaleIcon from "../../images/zerowhaleBasic.png";
import { Link } from "react-router-dom";


const CardListArea = styled.div`
    display:grid;
    margin-top:30px;
	grid-template-columns: repeat(auto-fill, minmax(24rem,1fr));
	grid-template-rows: 400px;
    grid-column-gap:45px;
    grid-row-gap:40px;
`;

const CardBox = styled.div`
    background-color: white;
    height:400px;
    display:flex;
    flex-direction:column;
    box-shadow:0 3px 7px 3px rgba(7, 7, 33, 0.1),0 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const CardLogoSpace = styled.div`
    
    border-bottom: solid rgba(100,100,200,0.2) 1px;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Logo = styled.img`
    height:100px;
`

const CardBodySpace = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    margin-left:20px;
    margin-right:20px;
`;

const CompanyNameText = styled.div`
    font-size:16px;
    font-weight:600;
    margin-bottom:20px;
    word-break: keep-all;
    white-space: pre-line;
`;

const CompanyDescText = styled.div`
    word-break: keep-all;
    line-height: 26px;
    white-space: pre-line;
`;

const CardBodyRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:30px;
    margin-top:16px;
`;

const HelpImg = styled.img`
    height:27px;
    margin-right:12px;
`

const BountyRangeInfo = styled.div`

`;




const CardRowText = styled.div`
    word-break: keep-all;
    line-height: 26px;
    white-space: pre-line;
    margin-left:10px;
    color:${props=>props.theme.darkGrayColor};
`;

const SLink = styled(Link)`
&:visited { text-decoration: none; color:black; }
&:hover { text-decoration: none; }
&:focus { text-decoration: none; }
&:hover, &:active { text-decoration: none; }
`;


export default () =>{

    return <CardListArea>
            <SLink to="/pastelplanet" >
            <CardBox>
            <CardLogoSpace>
                <Logo src="https://cdn-vzn.yottaa.net/555a305b2bb0ac71b9002d22/266f8ad067d20138af300ead9ecbf798.yottaa.net/v~4b.20d.0.0/tenantlogos/5326.png?yocs=D_H_"/>
            </CardLogoSpace>
            <CardBodySpace>
                <CompanyNameText>Starbucks</CompanyNameText>
                <CompanyDescText>We Provide Happiness for our customer. Thanks for your hackivity</CompanyDescText>
                <CardBodyRow>
                    <HelpImg src={categoryIcon}/>
                    <Tag text="Android"/>
                    <Tag text="Web"/>
                    <Tag text="IOS"/>
                    <Tag text="Windows"/>
                </CardBodyRow>
                <CardBodyRow>
                    <HelpImg src={wonIcon}/>
                    <CardRowText>Point{"⠀~⠀"}{"₩"}{"1000000"}</CardRowText>
                </CardBodyRow>
                <CardBodyRow>
                    <HelpImg src={zeroWhaleIcon}/>
                <CardRowText>{"managed by zerowhale"}</CardRowText>
                </CardBodyRow>

            </CardBodySpace>
            </CardBox>
            </SLink>


        <CardBox>456</CardBox>
        <CardBox>123</CardBox>
        <CardBox>456</CardBox>
        <CardBox>123</CardBox>
        <CardBox>456</CardBox>

    </CardListArea>
}