import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import wonIcon from "../../images/won.png";
import reportIcon from "../../images/report.png";
import basicLogo from "../../images/zerowhaleBasic.png";
import {fileServerAddr} from "../../common";
import {addCommaForMoney} from "../../utils";
import {SpinLoader} from "../Loaders";

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

    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        margin-top:40px;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
        margin-left:auto;
        margin-right:auto;
        width:90vw;
        padding-left:10px;
        padding-right:10px;
        height:300px;
        font-size:13px;
        
    }


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
    padding-left:15px;
    padding-right:15px;
`

const LogoImg = styled.img`
    max-height:100%;
    max-width:100%;
    object-fit:cover;
`


const MobileLogoArea = styled.div`
    height: 80px;
    width: 100%;

    border-bottom:1px groove rgba(30,30,40,0.1);
    display:flex;
    align-items:center;
    justify-content:center;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:10px;
`



const TopArea = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`

const CompanyArea = styled.div`
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        margin-top:12px;
    }
`

const CompanyName = styled.div`
    font-weight:600;
    font-size:20px;
    margin-bottom:20px;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size:15px;
        margin-bottom:12px;
    }
`
const CompanyDescription = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:1.5em;
    white-space: pre-line;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size:13px;
        margin-bottom:20px;
    }
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

const MobileBottomRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:30px;
`;

const MobileButtonArea = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin-top: auto;
    justify-self:flex-end;
    font-size:10px;
`

const LoaderWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const SubmitLink = styled(Link)`
  background-color: black;
  text-align:center;
  color:white;
  font-size:12px;
  padding:10px 15px;
  font-weight:600;
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
    logoId?:string|null;
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
    logoId,
}) => {
    let buttonStatus: boolean;
    if (hideButton===true){
        buttonStatus=false;
    } else if (hideButton===false){
        buttonStatus=true;
    } else {
        buttonStatus=true; // when undefined
    }
    console.log(window.innerWidth);////
    return (
    <BBPBannerBox>
        {loading?
        <LoaderWrapper>
            <SpinLoader/>
        </LoaderWrapper>
        :
        (window.innerWidth>700?
        // for desktop
        <>
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
                        <BottomSubHeadText>{"총 제출 리포트"}</BottomSubHeadText>
                    </BottomSubHead>
                    <BottomSubValue>{reportCount}</BottomSubValue>
                </BottomSubArea>
                    <BottomSubArea>
                    <BottomSubHead>
                        <img src={wonIcon} width={"22px"} height={"22px"} alt={""}/>
                        <BottomSubHeadText>{"바운티 범위"}</BottomSubHeadText>
                    </BottomSubHead>
                    <BottomSubValue> {(maxBounty===undefined||maxBounty===0)?
                    "Credit Only":
                    `₩${addCommaForMoney(minBounty)} ~ ₩${addCommaForMoney(maxBounty)}`
                    }</BottomSubValue>
                </BottomSubArea>
            </BottomArea>
        </BannerMainArea>
        <LogoArea>
            <LogoImg src={logoId?`${fileServerAddr}i/${logoId}/`:basicLogo} alt={""}/>        
        </LogoArea>
        </>
        :
        // for mobile
        <>
        <MobileLogoArea>
            <LogoImg src={logoId?`${fileServerAddr}i/${logoId}/`:basicLogo} alt={""}/>        
        </MobileLogoArea>
        <CompanyArea>
            <CompanyName>{companyName}</CompanyName>
            <CompanyDescription>{description}</CompanyDescription>
        </CompanyArea>
        <MobileBottomRow>
            <img src={reportIcon} width={"16px"} height={"16px"} alt={""}/>
            <BottomSubHeadText>{`총 ${reportCount}개 리포트 제출됨`}</BottomSubHeadText>
        </MobileBottomRow>
        <MobileBottomRow>
            <img src={wonIcon} width={"16px"} height={"16px"} alt={""}/>
            <BottomSubHeadText>
                {(maxBounty===undefined||maxBounty===0)?
                    "Credit Only":
                    `₩${addCommaForMoney(minBounty)} ~ ₩${addCommaForMoney(maxBounty)}`
                }
            </BottomSubHeadText>
        </MobileBottomRow>
        <MobileButtonArea>
            {hideButton?<></>:<SubmitLink to={"/"+nameId+"/report"}>{"Submit Report"}</SubmitLink>}
        </MobileButtonArea>
        </>
        )
        }
    </BBPBannerBox>
    
    
    )

}


export default BBPBanner;