import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';

const FooterWrapper = styled.footer`
    position: absolute;
    top: 100%;
    width: 100%;
    left:0;
    background: ${props=>props.theme.blackGrayColor};
    color: white;
    padding: 3rem;
    text-align: left;
    padding-left:calc(5vw + 25px);
    word-break: keep-all;
    line-height:2rem;
    white-space: pre-line;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
      font-size:11px;
      flex-direction:column;
      justify-content:flex-start;
    }
`;


const RelativeFooterWrapper = styled.footer`	
    width: 100vw;	
    position: relative;	
    display: flex;	
    left: 50%;	
    right: 50%;	
    margin-left: -50vw;	
    margin-right: -50vw;	
    background: ${props=>props.theme.blackGrayColor};	
    color: white;	
    bottom:-1200px;	
    padding: 3rem;
    padding-left: calc(5vw + 25px);	
    text-align: left;
    word-break: keep-all;
    line-height: 2rem;
    white-space: pre-line;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
      flex-direction:column;
      justify-content:flex-start;
      bottom: calc(-680px - 7vh);
      padding-left: calc(2vw + 20px);	
      font-size:11px;
    }
`;

const CopyText = styled.div`
  margin-right:100px;
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    margin-right:0px;
    }
`;

const Links = styled.div`
  display:flex;
  flex-direction:row;
  padding-right:25px;
`;


const SLink = styled(Link)`
  text-decoration:none;
  ${props=>props.theme.snowyGrayColor}
  &:active{
    color:${props=>props.theme.snowyGrayColor}
  }
  &:hover{
    color:${props=>props.theme.textColor}
  }
  &:visited{
    color:${props=>props.theme.snowyGrayColor}
  }
  &:link{
    color:${props=>props.theme.snowyGrayColor}
  }
  &:active{
    color:${props=>props.theme.snowyGrayColor}
  }
  a {
    text-decoration: none;
  }
  
`;


const OLink = styled.a`
  text-decoration:none;
  ${props=>props.theme.snowyGrayColor}
  &:active{
    color:${props=>props.theme.snowyGrayColor}
  }
  &:hover{
    color:${props=>props.theme.textColor}
  }
  &:visited{
    color:${props=>props.theme.snowyGrayColor}
  }
  &:link{
    color:${props=>props.theme.snowyGrayColor}
  }
  &:active{
    color:${props=>props.theme.snowyGrayColor}
  }
  a {
    text-decoration: none;
  }
  
`;

const Divide = styled.div`
  margin-left:20px;
  margin-right:20px;
`;


type FooterProps = {};

const FooterImage = styled.div`
`;

export const Footer: React.FC<FooterProps> = () => (
  <div>
    <FooterWrapper>
    <CopyText>
        {"Copyright © pastel planet. All rights reserved."}
    </CopyText>
    <Links>
      <SLink to="/privacy">{"Privacy"}</SLink>
      <Divide>{"|"}</Divide>
      <SLink to="/terms_of_service">{"Terms"}</SLink>
      <Divide>{"|"}</Divide>
      <OLink href={"https://docs.google.com/spreadsheets/d/1X7M9O6HcQ0cWdY957JxEsQuxNbNSzRGM3seZLfl_uBo/edit?usp=sharing"} target="_blank" rel={"noopener"}>{"OSL"}</OLink>
    </Links>
    </FooterWrapper>
  </div>
);

export const RelFooter: React.FC<FooterProps> = () => (
  <div>
    <RelativeFooterWrapper>
    <CopyText>
        {"Copyright © pastel planet. All rights reserved."}
    </CopyText>
    <Links>
      <SLink to="/privacy">{"Privacy"}</SLink>
      <Divide>{"|"}</Divide>
      <SLink to="/terms_of_service">{"Terms"}</SLink>
      <Divide>{"|"}</Divide>
      <OLink href={"https://docs.google.com/spreadsheets/d/1X7M9O6HcQ0cWdY957JxEsQuxNbNSzRGM3seZLfl_uBo/edit?usp=sharing"} target="_blank" rel={"noopener"}>{"OSL"}</OLink>
    </Links>
    </RelativeFooterWrapper>
  </div>
);