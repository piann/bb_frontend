import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import {BasicTableBox, BasicTableHead, BasicTableContent} from "../../Components/BasicTableElement"
import checkImg from "../../images/check.png";
import {LSpeechBubble, RSpeechBubble} from "../../Components/SpeechBubble"
import basicProfile from "../../images/basicProfile.png";
import TextArea from "../../Components/TextArea";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:flex;
    flex-direction:column;
`;

const InfoText = styled.text`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:8px;
`;

const BoldInfoText = styled(InfoText)`
    font-weight:600;
`;

const MiniTitleText = styled.text`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    font-weight:600;
    font-size:16px;
    margin-bottom:30px;

`
interface marginProps{
    marginLeft:number;
    marginRight:number;
}


const ProgressBarWrapper = styled.div`

    width: 100%;

    .progressbar li {
    list-style-type: none;
    width: 25%;
    float: left;
    font-size: 12px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    color: #7d7d7d;
    }
    .progressbar li:before {
    width: 60px;
    height: 60px;
    content: "";
    line-height: 60px;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 40%;
    border: 2px solid gray;
    position: relative;
    z-index: 2;
    background-color: white;
    }
    .progressbar li:after {
        width: 100%;
        height: 2px;
        content: '';
        position: absolute;
        background-color: gray;
        top: 30px;
        left: -50%;
        z-index: 0;
        
    }
    .progressbar li:first-child:after {
        content: none;
    }


    .progressbar li.active {
        color: ${props => props.theme.headerBarColor};
        font-weight: bold;  
    }
    .progressbar li.active:before {
        border-color: ${props => props.theme.headerBarColor};
        background: white url(${checkImg}) no-repeat center center;
        background-size: 30px
    }
    .progressbar li.active + li:after {
        background-color: ${props => props.theme.headerBarColor};
    }
`;

const AdditionalInfo = styled.div`
    display:flex;
    justify-content:flex-end;
    height:30px;
    margin-top:50px;
    margin-right:5%;
`;

// Position of Comment Wrapper is set by parent justify-content feature 
const CommentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:22px;

`;
const ProfileWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100px;
    height:80px;
    
    :nth-child(1){
    margin-right:30px;
    }
    :last-child{
    margin-left:30px;
    }
`
const ProfileId = styled.text`
  margin-top:18px;
  word-break: keep-all;
`

const CommentTextAreaWrapper = styled.text`
    margin-top:40px;
    width:100%;
    display:flex;
    flex-direction:row;
`;

const CommentProfileImgWrapper = styled.text`
    padding-top:15px;
    margin-right:30px;
`;

const ButtonWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`;

const elements = ['이런 것을 이렇게 해야한다', '저렇게 이렇게 꼭 해야한다', '이런 것을 알아야한다.'];////
const testTargetObjList = [
    {
      reportId: "ckdd2g2au0006a1p4donly56g",
      authorNickName: "babubabapplebannanke",
      status: "0",
      result: null
    },
    {
        reportId: "ckdd2g2au0006a1p4donly56g",
        authorNickName: "jtjisGod",
        status: "0",
        result: null
      }
  ] ////


export default () => 
<>
<BBPBanner hideButton={true}/>
<BBPSubMenu/>
<BBPBody>
        <InformationBox>
            <InformationTitle>Progress</InformationTitle>
            <InformationContent>
            <ProgressBarWrapper>
                <div className="progressbar">
                    <li className="active">{"1. STAND BY"}</li>
                    <li className="active">{"2. IN PROGRESS"}</li>
                    <li className="inactive">{"3. ON ASSESMENT"}</li>
                    <li className="inactive">{"4. RESOLVED"}</li>
                </div>
            </ProgressBarWrapper>
            <AdditionalInfo>
                <BoldInfoText>{"Result⠀:⠀"}</BoldInfoText><InfoText>{"DUPLICATED"}</InfoText>
            </AdditionalInfo>

            </InformationContent>
        </InformationBox>
        {/* second area start */}
        <InformationBox>
            <InformationTitle>Comments</InformationTitle>
            <InformationContent>
                <CommentWrapper className={"leftAlign"}>
                    <ProfileWrapper>
                    <img src={basicProfile} width={"50px"} height={"50px"}/>
                    <ProfileId>jtjisGodISMINER</ProfileId>
                    </ProfileWrapper>
                    <LSpeechBubble
                    maxWidth={"calc(100% - 130px)"} 
                    text={"이것은 테스트 항항의글을 달면  있을 것이라고감. 여기서부터 무슨 내용들을 적을 것이고 그것들에 대한 이야기들을 답변하는 전개가 이루어져야 함."}/>
                </CommentWrapper>
                <CommentWrapper className={"rightAlign"}>
                    <RSpeechBubble
                    maxWidth={"calc(100% - 130px)"} 
                    text={"이것은 테스트 항이것 내용들이 있을 것이라고감"}/>
                    <ProfileWrapper>
                    <img src={basicProfile} width={"50px"} height={"50px"}/>
                    <ProfileId>jtjisGodISMINER</ProfileId>
                    </ProfileWrapper>
                </CommentWrapper>
                <CommentTextAreaWrapper >
                        <CommentProfileImgWrapper>
                            <img src={basicProfile} width={"50px"} height={"50px"}/>
                        </CommentProfileImgWrapper>
                    <TextArea rows={3} maxLength={3000} textAreaWidth={"calc(100% - 80px)"}/>
                </CommentTextAreaWrapper>
                <ButtonWrapper>
                    <Button text="Submit" width="90px"/>
                </ButtonWrapper>
            </InformationContent>
        </InformationBox>

</BBPBody>

</>