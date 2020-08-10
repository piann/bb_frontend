import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const BBPBannerBox = styled.div`
    background-color: white;
    border-radius: ${props => props.theme.borderRadius};
    height: ${props => props.theme.bannerHeight};
    padding: 8px 20px;
    margin-top:80px;
    width: calc(90vw - 50px);
    max-width:${props => props.theme.maxBodyWidth};

    display:grid;
    grid-auto-flow: column;
    grid-template-rows: 4fr 1fr;
    align-items: center;

    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    position: relative;
`;




export default () => <BBPBannerBox>
    Banner
</BBPBannerBox>