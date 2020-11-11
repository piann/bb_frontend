import React from "react";
import styled from "styled-components";
import mainImg from "../images/main.jpg";
import AdvButton from "../Components/AdvButton";
import Pdf from '../resources/What_is_bugbounty.pdf';
import groupImg from "../images/group.png";
import increaseImg from "../images/increase.png";
import clockImg from "../images/time.png";
import marketingImg from "../images/marketing.png";
import {RelFooter} from '../Components/Footer';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const WholeWrapper = styled.div`
    height:max-content;
`;

const UpperBody = styled.div`

width: 100%;
height: 1200px;
position: absolute;
top: ${props => props.theme.headerBarHeight};
left:0;
right:0;
@media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        height:calc(10vh + 500px);
        top: calc(${props => props.theme.headerBarHeight} - 10px);
}
background-color: white;
background-image: url(${mainImg});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
-webkit-clip-path: polygon(0 0, 100% 0%, 100% 94%, 0 100%);
  clip-path: polygon(0 0, 100% 0%, 100% 94%, 0 100%);
`;

const MainText = styled.div`
    text-align:center;
    position:relative;
    top:90px;
    font-size:50px;
    font-family: 'Source Serif Pro', serif;
    display: flex;
    justify-content:center;
    align-items:center;
    animation: loading 3s alternate;
    @keyframes loading {
    0% {
        filter: blur(5px);
        opacity: 0;
    }
    100% {
        
        opacity: 1;
    }
    }
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size: 8vw;
        top:60px;
    }
`;
const SubArea = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:calc(110px - 1.2vw);
`

const SubText = styled.div`
    line-height:2rem;
    text-align:center;
    font-size:16px;
    margin-top:20px;
    margin-bottom:30px;
    font-family: 'Noto Serif KR', serif;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        margin-top:0px;
        font-size:0px;
    }
`;

const MainBody = styled.div`
    position: relative;
    top: 1200px;
    margin-top:200px;
    margin-bottom:100px;
    display: grid;
    flex-direction:row;
    justify-content:center;
    align-items:center;
	grid-template-columns: repeat(auto-fill, minmax(auto, 38%));
    font-size:15px;
	grid-template-rows: 250px;
    grid-row-gap:100px;
`;

const MainMobileBody = styled.div`
    position: relative;
    top: calc(10vh + 570px);
    margin-top:50px;
`;


const DescBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height: 230px;
`

const DescImg = styled.img`
    width:110px;
    height:110px;
    margin-bottom:30px;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        width:90px;
        height:90px;
    }
`

const DescText= styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    font-family: 'Noto Serif KR', serif;
`;

const VideoWrapper= styled.div`

    width:498px;
    height:280px;
    justify-content:center;
    align-self:center;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        margin-top:100px;
        width:70vw;
        height:39.3vw;
    }
`;


export default () => {
    
    return (
        (window.innerWidth>700?
            // for desktop
            <WholeWrapper>
            <UpperBody>
                <MainText>{"We connect security"}</MainText>
                <SubArea>
                <VideoWrapper>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3y-pW1qZf1U"></iframe>
                </VideoWrapper>
                    <SubText>{"버그바운티는 협력을 통하여 보안문제를 해결하는 솔루션입니다."}</SubText>
                    <a href = {Pdf} target = "_blank" rel={"noopener"}>
                        <AdvButton text={"More specific pdf"} />
                    </a>
                </SubArea>
            </UpperBody>
            <MainBody>
                <DescBox>
                    <DescImg src={groupImg}/>
                    <DescText>{"다양한 지식의 해커들이\n진단을 수행합니다."}</DescText>
                </DescBox>
                <DescBox>
                    <DescImg src={increaseImg}/>
                    <DescText>{"기존 취약점 진단 대비\n최대 6배의 취약점이 발견됩니다."}</DescText>
                </DescBox>
                <DescBox>
                    <DescImg src={clockImg}/>
                    <DescText>{"취약점 발견시간 및\n대응시간이 단축됩니다."}</DescText>
                </DescBox>
                <DescBox>
                    <DescImg src={marketingImg}/>
                    <DescText>{"보안에 자신있다는\n마케팅 요소로 활용됩니다."}</DescText>
                </DescBox>
            </MainBody>
            <RelFooter/>
            </WholeWrapper>
                :
            // for mobile
            <WholeWrapper>
                <UpperBody>
                    <MainText>{"We connect security"}</MainText>
                    <SubArea>
                        <VideoWrapper>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3y-pW1qZf1U"></iframe>
                        </VideoWrapper>
                        <SubText>{"버그바운티는 협력을 통하여 보안문제를 해결하는 솔루션입니다."}</SubText>
                        <a href = {Pdf} target = "_blank">
                            <AdvButton text={"More specific pdf"} width={"180px"}/>
                        </a>
                    </SubArea>
                </UpperBody>
                <MainMobileBody>
    
                    <Swiper
                        spaceBetween={50}
                        pagination={{ clickable: true }}
                        autoplay={{delay: 3000}}
                        loop={true}
                    >
                    <SwiperSlide>
                        <DescBox>
                            <DescImg src={groupImg}/>
                            <DescText>{"다양한 지식의 해커들이\n진단을 수행합니다."}</DescText>
                        </DescBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DescBox>
                            <DescImg src={increaseImg}/>
                            <DescText>{"기존 취약점 진단 대비\n최대 6배의 취약점이 발견됩니다."}</DescText>
                        </DescBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DescBox>
                            <DescImg src={clockImg}/>
                            <DescText>{"취약점 발견시간 및\n대응시간이 단축됩니다."}</DescText>
                        </DescBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DescBox>
                            <DescImg src={marketingImg}/>
                            <DescText>{"보안에 자신있다는\n마케팅 요소로 활용됩니다."}</DescText>
                        </DescBox>
                    </SwiperSlide>
                    </Swiper>
                </MainMobileBody>
                <RelFooter/>
            </WholeWrapper>
        )
    )
}