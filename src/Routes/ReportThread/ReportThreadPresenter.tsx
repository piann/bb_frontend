import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import checkImg from "../../images/check.png";
import {LSpeechBubble, RSpeechBubble} from "../../Components/SpeechBubble"
import basicProfile from "../../images/basicProfile.png";
import TextArea from "../../Components/TextArea";
import Button from "../../Components/Button";
import {BarLoader} from "../../Components/Loaders"
import { ToastContainer } from 'react-toastify';
import AdvButton from "../../Components/AdvButton";
import { Link } from "react-router-dom";
import moment from "moment";

const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:flex;
    flex-direction:column;
`;

const InfoText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    margin-bottom:8px;
`;

const CommentTimeText = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:center;
    font-size : 11px;
    color: ${props=>props.theme.normalGrayColor};
`;

const BoldInfoText = styled(InfoText)`
    font-weight:600;
`;


interface marginProps{
    marginLeft:number;
    marginRight:number;
}

const ButtonRow = styled.div`
    display:flex;
    justify-content:flex-end;
    height:30px;
    margin-bottom:100px;
    margin-right:2%;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        margin-bottom:70px;
    }
`;
const LoaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:50px;
    width:100%;
`;

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
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size:10px;
    }
    }
    .progressbar li:before {
    width: 60px;
    height: 60px;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        width: 30px;
        height: 30px;
        font-size:10px;
    }
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
        @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
            top: 15px;
        }
        
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
        background-size: 30px;
        @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
            background-size: 20px;
        }   

    }
    .progressbar li.active + li:after {
        background-color: ${props => props.theme.headerBarColor};
    }
`;

const AdditionalInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    margin-top:50px;
    margin-right:30px;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size: 12px;
        margin-right:15px;
    }
`;

const AdditionalRow = styled.div`
    display:flex;
    flex-direction:row;
`;


// Position of Comment Wrapper is set by parent justify-content feature 
const CommentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size:11px;
    }
`;

const CommentTimeWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:22px;
`;

const CommentTimePaddingWrapper = styled.div`
    height:10px;
    width:140px;
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
const ProfileId = styled.div`
  margin-top:18px;
  word-break: keep-all;
`

const CommentTextAreaWrapper = styled.div`
    margin-top:40px;
    width:100%;
    display:flex;
    flex-direction:row;
`;

const CommentProfileImgWrapper = styled.div`
    padding-top:15px;
    margin-right:30px;
`;

const ButtonWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`;
/*
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


*/

///// add collaborator comment case
export default ({
    loading,
    nameId,
    rId,
    authorNickName,
    progressStatus,
    resultCode,
    bountyAmount,
    grantedCredit,
    commentInfoList,
    //
    buttonDisabled,
    commentInput,
    clickFunc,
}:any) => 
<>
<BBPBanner hideButton={true} nameId={nameId}/>
<BBPSubMenu nameId={nameId} />
<ToastContainer/>
<BBPBody>
    {loading?
    <LoaderWrapper>
        <BarLoader/>
    </LoaderWrapper>
    :
        <>
        <InformationBox>
            <InformationTitle>Progress</InformationTitle>
            <InformationContent>
            <ButtonRow>
                <Link to={`/view_report/${rId}`}>
                    <AdvButton text={"View Report"} width={window.innerWidth>700?"150px":"120px"}/>
                </Link>
            </ButtonRow>
            <ProgressBarWrapper>
                <div className="progressbar">
                    <li className={progressStatus>=0?"active":"inactive"}>{"1. STAND BY"}</li>
                    <li className={progressStatus>=1?"active":"inactive"}>{"2. IN PROGRESS"}</li>
                    <li className={progressStatus>=2?"active":"inactive"}>{"3. ON ASSESMENT"}</li>
                    <li className={progressStatus>=3?"active":"inactive"}>{"4. RESOLVED"}</li>
                </div>
            </ProgressBarWrapper>
            <AdditionalInfo>
                <AdditionalRow>
                    <BoldInfoText>{"Result⠀:⠀"}</BoldInfoText><InfoText>{resultCode?resultCode:" - "}</InfoText>
                </AdditionalRow>
                {bountyAmount>0?
                <AdditionalRow>
                    <BoldInfoText>{"Reward⠀:⠀"}</BoldInfoText><InfoText>{`₩${bountyAmount}`}</InfoText>
                </AdditionalRow>
                :<></>}
                {grantedCredit>0?
                <AdditionalRow>
                    <BoldInfoText>{"Credit Granted⠀:⠀"}</BoldInfoText><InfoText>{grantedCredit}</InfoText>
                </AdditionalRow>
                :<></>}
            </AdditionalInfo>

            </InformationContent>
        </InformationBox>
        

        <InformationBox>
            <InformationTitle>Comments</InformationTitle>
            <InformationContent>
            {commentInfoList.map((dictObj:any, index:any) => {
                const commenterNickName = dictObj.writerNickName;
                const commentContent = dictObj.content;
                const commentTime = dictObj.createdAt;

                const isAuthor = (authorNickName)===(commenterNickName)

                if(isAuthor===true){ // determine direction of bubble 
                    return(
                        <CommentTimeWrapper>
                            <CommentWrapper className={"rightAlign"} key={1000+index}>
                                <RSpeechBubble
                                maxWidth={"calc(100% - 130px)"} 
                                text={commentContent}/>
                                <ProfileWrapper>
                                <img src={basicProfile} width={"50px"} height={"50px"} alt={""}/>
                                <ProfileId>{commenterNickName}</ProfileId>
                                </ProfileWrapper>
                            </CommentWrapper>
                            <CommentTimeText className={"rightAlign"}>
                                {moment(commentTime).format("YY-MM-DD / LT")}
                                <CommentTimePaddingWrapper />
                            </CommentTimeText>
                        </CommentTimeWrapper>
                    )
                } else {
                    return(
                        <CommentTimeWrapper>
                            <CommentWrapper className={"leftAlign"} key={1000+index}>
                                <ProfileWrapper>
                                <img src={basicProfile} width={"50px"} height={"50px"} alt={""}/>
                                <ProfileId>{commenterNickName}</ProfileId>
                                </ProfileWrapper>
                                <LSpeechBubble
                                maxWidth={"calc(100% - 130px)"} 
                                text={commentContent}/>
                            </CommentWrapper>
                            <CommentTimeText className={"leftAlign"}>
                                <CommentTimePaddingWrapper />
                                {moment(commentTime).format("YY-MM-DD / LT")}
                            </CommentTimeText>
                        </CommentTimeWrapper>
                    )

                }
                                
            })}



                <CommentTextAreaWrapper >
                        <CommentProfileImgWrapper>
                            <img src={basicProfile} width={"50px"} height={"50px"} alt={""}/>
                        </CommentProfileImgWrapper>
                    <TextArea rows={3} maxLength={3000} textAreaWidth={"calc(100% - 80px)"} {...commentInput}/>
                </CommentTextAreaWrapper>
                <ButtonWrapper>
                    <Button text="Submit" width="90px" disabled={buttonDisabled||commentInput.value===""} onClick={clickFunc}/>
                </ButtonWrapper>
            </InformationContent>
        </InformationBox>
        </>
    }
</BBPBody>

</>