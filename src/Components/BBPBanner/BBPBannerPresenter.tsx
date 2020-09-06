import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import wonIcon from "../../images/won.png";
import reportIcon from "../../images/report.png";


const BBPBannerBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: ${props => props.theme.bannerHeight};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left:35px;
    margin-top:80px;
    width: calc(90vw - 50px);
    max-width:${props => props.theme.maxBodyWidth};

    display:grid;
    grid-auto-flow: column;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;
`;

const BannerMainArea = styled.div`
    height: calc(${props => props.theme.bannerHeight} - 40px);
    width:100%;
    padding-top:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

`;

const LogoArea = styled.div`
    height: calc(${props => props.theme.bannerHeight} - 40px);
    border-left:2px groove ${props => props.theme.snowyGrayColor};
    display:flex;
    align-items:center;
    justify-content:center;
`

const TopArea = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`

const CompanyArea = styled.div`
    display:flex;
    flex-direction:column;
`

const CompanyName = styled.div`
    font-weight:600;
    font-size:20px;
    margin-bottom:20px;
`
const CompanyDescription = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:1.5em;
    white-space: pre-line;
`;


const ButtonArea = styled.div`
    width:150px;
    margin-left:20px;
    margin-right:20px;
`

const BottomArea = styled.div`
    height:70px;
    width:100%;
    display:flex;
    flex-direction:row;
`

const BottomSubArea = styled.div`
    margin-right:30px;
    padding-right:30px;
    &:first-child{
        border-right:2px groove ${props => props.theme.snowyGrayColor};
    }
    display:grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr;

`

const BottomSubHead = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

const BottomSubHeadText = styled.div`
    margin-left:8px;
`;

const BottomSubValue = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;


interface Props {
    loading:boolean;
    nameId?:string;
    hideButton?:boolean;
    companyName?:string;
    description?:string;
    reportCount?:number;
    minBounty?:number;
    maxBounty?:number;
}


const BBPBanner:React.SFC<Props> = ({
    loading,
    nameId,
    hideButton,
    companyName,
    description,
    reportCount,
    minBounty,
    maxBounty,
}) => {
    let buttonStatus: boolean;
    if (hideButton===true){
        buttonStatus=false;
    } else if (hideButton===false){
        buttonStatus=true;
    } else {
        buttonStatus=true; // when undefined
    }
    return (
    <BBPBannerBox>
        <BannerMainArea>
            <TopArea>
                <CompanyArea>
                    <CompanyName>{companyName}</CompanyName>
                    <CompanyDescription>{description}</CompanyDescription>
                </CompanyArea>
                {buttonStatus?
                <ButtonArea>
                    <Link to={"/"+nameId+"/report"}>
                        <Button text={"Submit Report"}/>
                    </Link>
                </ButtonArea>:
                <div></div>
                }
                
            </TopArea>
            <BottomArea>
                <BottomSubArea>
                    <BottomSubHead>
                        <img src={reportIcon} width={"18px"} height={"18px"} alt={""}/>
                        <BottomSubHeadText>총 제출 리포트</BottomSubHeadText>
                    </BottomSubHead>
                    <BottomSubValue>{reportCount}</BottomSubValue>
                </BottomSubArea>
                    <BottomSubArea>
                    <BottomSubHead>
                        <img src={wonIcon} width={"22px"} height={"22px"} alt={""}/>
                        <BottomSubHeadText>현상금 범위</BottomSubHeadText>
                    </BottomSubHead>
                    <BottomSubValue>{"₩"}{minBounty}{" ~ "}{"₩"}{maxBounty}</BottomSubValue>
                </BottomSubArea>
            </BottomArea>
        </BannerMainArea>
        <LogoArea>
        <img src="https://cdn-vzn.yottaa.net/555a305b2bb0ac71b9002d22/266f8ad067d20138af300ead9ecbf798.yottaa.net/v~4b.20d.0.0/tenantlogos/5326.png?yocs=D_H_" width={"80%"} alt={""}/>        
        </LogoArea>
    </BBPBannerBox>)

}


export default BBPBanner;