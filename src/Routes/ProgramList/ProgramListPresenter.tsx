import React from "react";
import styled from "styled-components";
import Tag from "../../Components/Tag";
import categoryIcon from "../../images/category.png";
import wonIcon from "../../images/won.png";
import zeroWhaleIcon from "../../images/zerowhaleBasic.png";
import selfCheckIcon from "../../images/selfCheck.png";
import { Link } from "react-router-dom";
import {BarLoader} from "../../Components/Loaders";
import { categoryUpperToNormal } from "../../common";
import { getBountyRangeText } from "../../utils";

const LoaderWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:100px;
`

const CardListArea = styled.div`
    display:grid;
    margin-top:30px;
	grid-template-columns: repeat(auto-fill, minmax(23rem,1fr));

    grid-column-gap:45px;
    grid-row-gap:40px;
`;

const CardBox = styled.div`
    background-color: white;
    padding-bottom:30px;
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
    margin-bottom:13px;
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
`;

const CardRowText = styled.div`
    word-break: keep-all;
    line-height: 26px;
    white-space: pre-line;
    margin-left:8px;
    color:${props=>props.theme.darkGrayColor};
`;

const SLink = styled(Link)`
text-decoration: none; color:black;
&:visited { text-decoration: none; color:black;}
&:hover { text-decoration: none; color:black;}
&:focus { text-decoration: none; color:black;}
&:hover, &:active { text-decoration: none; color:black;}
`;


export default ({
loading,
programInfoList,
}:any) =>{
    console.log(programInfoList);////
    return (<>
    {loading?
    <LoaderWrapper>
        <BarLoader/>
    </LoaderWrapper>
    :
    <CardListArea>
            {programInfoList.map((programInfo:any, index:any) => {

            return (
            <SLink to={"/"+programInfo.nameId} key={1000+index}>
                <CardBox>
                <CardLogoSpace>
                    <Logo src="https://cdn-vzn.yottaa.net/555a305b2bb0ac71b9002d22/266f8ad067d20138af300ead9ecbf798.yottaa.net/v~4b.20d.0.0/tenantlogos/5326.png?yocs=D_H_"/>
                </CardLogoSpace>
                <CardBodySpace>
                    <CompanyNameText>{programInfo.companyName}</CompanyNameText>
                    <CompanyDescText>{programInfo.description}</CompanyDescText>
                    <CardBodyRow>
                        <HelpImg src={categoryIcon}/>
                        {
                                programInfo.inScopeTypeList.map((type:any,idx:any)=><Tag text={categoryUpperToNormal[type]} key={2000+idx}/>)
                        }
                    </CardBodyRow>
                    <CardBodyRow>
                        <HelpImg src={wonIcon}/>
                        <CardRowText>{getBountyRangeText(programInfo.bountyMin,programInfo.bountyMax)}</CardRowText>
                    </CardBodyRow>
                    {
                    programInfo.managedBy==="zerowhale"&&
                    <CardBodyRow>
                        <HelpImg src={zeroWhaleIcon}/>
                    <CardRowText>{"managed by zerowhale"}</CardRowText>
                    </CardBodyRow>
                    }
                    {
                    programInfo.managedBy==="self"&&
                    <CardBodyRow>
                        <HelpImg src={selfCheckIcon}/>
                    <CardRowText>{"managed by self"}</CardRowText>
                    </CardBodyRow>
                    }

                </CardBodySpace>
                </CardBox>
            </SLink>
            )

            })}
            


        <CardBox>456</CardBox>
        <CardBox>123</CardBox>
        <CardBox>456</CardBox>
        <CardBox>123</CardBox>
        <CardBox>456</CardBox>

    </CardListArea>}
    </>
    )

}