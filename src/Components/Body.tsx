import styled from "styled-components";


export const BodyWrapper = styled.div`
  width:100%;
  height: max-content;
  display:flex;
  justify-content:center;
  
`;

export const Body = styled.div`

width:100%;
max-width:${props => props.theme.maxBodyWidth};
@media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    width:100vw;
    max-width:100vw;
}


`;

export default Body;
