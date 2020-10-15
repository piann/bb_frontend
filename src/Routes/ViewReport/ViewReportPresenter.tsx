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
import grayProfile from "../../images/grayProfile.png";
import { Link } from "react-router-dom";
import {fileServerAddr} from "../../common";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';


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
    margin-top:10px;
`

const Line = styled.div`
    height:0.01px;
    width: calc(100% - 310px);
    border-top: 1px solid ${props=>props.theme.purpleColor};
`;


const TitleLogo = styled.img`
    width:50px;
`

const HackerInfoRow = styled.div`
    margin-top:10px;
    margin-left:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:50px;
    width:min-content;
`;

const HackerNickNameText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
`;


const HackerProfileImg = styled.img`
  height:55px;
  width:55px;
  border-radius:43%;
  margin-bottom:10px;
`;

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


const EtcPaperArea = styled.div`
display:none;
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
    cursor:pointer;
    width:16px;
    height:16px;
    margin-left:10px;
    margin-bottom:20px;
`;

const LoaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:50px;
    width:100%;
`;

const MInformationContent = styled(InformationBox)`
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size: 12px;
    }
`;


const toggleHide = ():any => {
    var contentObj = document.getElementById("EtcContent");
    if (contentObj?.style.display !== "block") {
        contentObj!.style.display = "block";
    } else {
        contentObj!.style.display = "none";
    }
}



export default ({
    loading,
    nameId,
    fileId,
    profilePicId,
    authorNickName,
    vulName,
    assetName,
    title,
    description,
    cvssScore,
    additionalText,
    location,
    enviroment,
    dump,
    fileDownloadFunc
}:any) => (
<>
<BBPBanner hideButton={true} nameId={nameId}/>
<BBPSubMenu nameId={nameId}/>
<BBPBody>
    {loading?
    <LoaderWrapper>
        <BarLoader/>
    </LoaderWrapper>
    :
        <>
        <InformationBox>
            <InformationTitle>Report</InformationTitle>
            <MInformationContent>
            {fileId?
            <HeadWrapper>
            <TitleLogo src={basicLogo}/>
            <Line/>
                <Button text={"Download attachment"} width={"180px"} onClick={fileDownloadFunc}/>
            </HeadWrapper>
            :
            <></>
            }
            <MiniTitleText>{"0. Hacker "}</MiniTitleText>
            <HackerInfoRow>
                <HackerProfileImg src={profilePicId?`${fileServerAddr}i/${profilePicId}/`:grayProfile}/>
                <HackerNickNameText>{authorNickName}</HackerNickNameText>
            </HackerInfoRow>


            <MiniTitleText>{"1. Vulnerability "}</MiniTitleText>
            <InfoText>{vulName}</InfoText>


            <MiniTitleText>{"2. Asset"}</MiniTitleText>
            <InfoText>{assetName}</InfoText>


            <MiniTitleText>{"3. Detail"}</MiniTitleText>
            <PaperArea>
                <div className={"paper"}>
                <ReportTitleText>{title}</ReportTitleText>
                <Viewer initialValue={description}/>
                </div>
            </PaperArea>


            <MiniTitleText>{"4. CVSS score"}</MiniTitleText>
            {cvssScore===null?
                <InfoText>{"평가점수가 없습니다."}</InfoText>
            :<StarWrapper>
                <RatingStar id="1000" maxScore={10} rating={cvssScore} />
                <RatingText>{"("}{cvssScore}{" / 10.0)"}</RatingText>
            </StarWrapper>
            }

            <MiniTitleText>{"5. Hacker's comment "}</MiniTitleText>
            <InfoText>{additionalText}</InfoText>


            {
                (location||enviroment!=="::::"||dump)&&
            <>
            <EtcHeader>
            <MiniTitleText>{"6. Etc"}</MiniTitleText>
                <EtcArrow src={hideArrow} onClick={toggleHide}/>
            </EtcHeader>

            <EtcPaperArea id="EtcContent">
                <div className={"paper"}>
                {
                    location&&
                    <>
                    <MiniTitleText>{"Location of Vulnerability"}</MiniTitleText>
                    <PaperText>{location}</PaperText>
                    </>
                }
                {               
                enviroment!=="::::"&&
                <>
                <MiniTitleText>{"Enviroment"}</MiniTitleText>
                <PaperText>{enviroment}</PaperText>
                </>
                }
                {
                dump&&
                <>
                <MiniTitleText>{"HTTP dump"}</MiniTitleText>
                <PaperText>{dump}</PaperText>
                </>
                }

                </div>
            </EtcPaperArea>
            </>
            }
            </MInformationContent>
        </InformationBox>
        
        </>
    }
</BBPBody>
</>
)