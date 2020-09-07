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
    bottom:-850px;	
    padding: 3rem;
    padding-left: calc(5vw + 25px);	
    text-align: left;	
`;

type FooterProps = {};

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