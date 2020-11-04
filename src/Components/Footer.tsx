import React from 'react';
import styled from "styled-components";

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
    line-height:1.5rem;
    white-space: pre-line;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
      font-size:11px;
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
    line-height:1.5rem;
    white-space: pre-line;
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
      bottom: calc(-680px - 7vh);
      padding-left: calc(2vw + 20px);	
      font-size:11px;
    }
`;

type FooterProps = {};

const FooterImage = styled.div`

`;

export const Footer: React.FC<FooterProps> = () => (
  <div>
    <FooterWrapper>
        {"Copyright © pastel planet. All rights reserved."}
    </FooterWrapper>
  </div>
);

export const RelFooter: React.FC<FooterProps> = () => (
  <div>
    <RelativeFooterWrapper>
        {"Copyright © pastel planet. All rights reserved."}
    </RelativeFooterWrapper>
  </div>
);