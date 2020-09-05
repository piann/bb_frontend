import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BarLoader} from "../../Components/Loaders"
import Button from "../../Components/Button";
import basicLogo from "../../images/zerowhaleBasic.png";
import hideArrow from "../../images/hideArrow.png";
import { RatingStar } from "rating-star";


const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:flex;
    flex-direction:column;
`;

const MiniTitleText = styled.div`
    font-weight:600;
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:20px;
`;

const ReportTitleText = styled.div`
    font-weight:600;
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:50px;
`;

const InfoText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:50px;
    margin-left:3px;
`;

const HeadWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-bottom:55px;

`

const Line = styled.div`
    height:0.01px;
    width: calc(100% - 310px);
    border-top: 1px solid ${props=>props.theme.purpleColor};
`;


const TitleLogo = styled.img`
    width:50px;
`

const PaperArea = styled.div`
margin-top:20px;
margin-bottom:50px;
.paper {
  background: #fff;
  padding: 30px;
  position: relative;
}

.paper,
.paper::before,
.paper::after {
  /* Styles to distinguish sheets from one another */
  box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
  border: 1px solid #bbb;
}

.paper::before,
.paper::after {
  content: "";
  position: absolute;
  height: 95%;
  width: 99%;
  background-color: #eee;
}

.paper::before {
  right: 15px;
  top: 0;
  transform: rotate(-1deg);
  z-index: -1;
}

.paper::after {
  top: 5px;
  right: -5px;
  transform: rotate(1deg);
  z-index: -2;
}

`;

const PaperText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:35px;
    margin-left:1px;
`;


const StarWrapper = styled.div`
    width:min-content;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-bottom:50px;
    
`;              

const RatingText = styled.div`
    padding-top:3px;
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    font-size:12px;
    white-space: pre-line;
    width:100px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

const EtcHeader = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const EtcArrow = styled.img`
    width:16px;
    height:16px;
    margin-left:10px;
    margin-bottom:20px;
`;


const EtcArea = styled.div`

`;


const toggleHide = ():any => {
    var contentObj = document.getElementById("EtcContent");
    if (contentObj?.style.display === "none") {
        contentObj!.style.display = "block";
      } else {
        contentObj!.style.display = "none";
      }
}



export default ({
    loading,
    nameId,
}:any) => (
<>
<BBPBanner hideButton={true} nameId={nameId}/>
<BBPSubMenu nameId={nameId}/>
<BBPBody>
    {loading?
    <BarLoader/>:
        <>
        <InformationBox>
            <InformationTitle>Report</InformationTitle>
            <InformationContent>
            <HeadWrapper>
            <TitleLogo src={basicLogo}/>
            <Line/>
            <Button text={"Download attachment"} width={"200px"}/>
            </HeadWrapper>
            <MiniTitleText>{"1. Vulnerability "}</MiniTitleText>

            <InfoText>{"Universal Cross-Site Scripting (UXSS)"}</InfoText>
            <MiniTitleText>{"2. Asset"}</MiniTitleText>
            <InfoText>{"https://api.zerowhale.io"}</InfoText>
            <MiniTitleText>{"3. Detail"}</MiniTitleText>
            <PaperArea>
                <div className={"paper"}>
                <ReportTitleText>{"댓글 기능에서 XSS 취약점 발견"}</ReportTitleText>
                <PaperText>{"이것은 리포트의 내용 예시입니다. 이런 식으로 리포트의 내용들을 채우고 공격에 대해서 설명합니다. md 파일 기능을 지원할 예정에 있습니다."}</PaperText>
                </div>
            </PaperArea>
            <MiniTitleText>{"4. CVSS score"}</MiniTitleText>
            <StarWrapper>
            <RatingStar id="100" maxScore={10} rating={8.0} />
            <RatingText>{"("}{"8.0"}{" / 10.0)"}</RatingText>
            </StarWrapper>
            <MiniTitleText>{"5. Hacker's comment "}</MiniTitleText>
            <InfoText>{"이런 저런 이야기와 의견들"}</InfoText>

            <EtcHeader>
            <MiniTitleText>{"6. Etc"}</MiniTitleText>
                <EtcArrow src={hideArrow} onClick={toggleHide}/>
            </EtcHeader>
            <PaperArea id="EtcContent">
                <div className={"paper"}>
                <MiniTitleText>{"Location of Vulnerability"}</MiniTitleText>
                <PaperText>{"url example"}</PaperText>

                <MiniTitleText>{"Enviroment"}</MiniTitleText>
                <PaperText>{"env example"}</PaperText>

                <MiniTitleText>{"HTTP dump"}</MiniTitleText>
                <PaperText>{"dump packet"}</PaperText>

                </div>
            </PaperArea>
            </InformationContent>
        </InformationBox>
        
        </>
    }
</BBPBody>
</>
)