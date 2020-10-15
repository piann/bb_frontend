import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

export default createGlobalStyle`
    ${reset};
    /*@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');*/
    
    * {
        box-sizing:border-box;
    }
    body {
        background-color:${theme.bgColor};
        color: ${theme.textColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: ${theme.headerBarHeight};
        @media only screen and (max-width: ${theme.mobileWidth}) {
            padding-top:calc(${theme.headerBarHeight} - 10px);
            font-size:12px;
        }
    }
    a {
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;