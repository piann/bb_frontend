import React from 'react';
import styled from "styled-components";

const FooterWrapper = styled.footer`
    position: relative;
    display: flex;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
    background: rgb(45, 55, 67);
    color: white;
    bottom:-850px;
    padding: 3.3rem;
    text-align: left;
    padding-left:150px
`;


type FooterProps = {};

const Footer: React.FC<FooterProps> = () => (
  <div>
    <FooterWrapper>
        Copyright © pastel planet. All rights reserved.
    </FooterWrapper>
  </div>
);

export default Footer;