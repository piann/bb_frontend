import styled from "styled-components";


export const BodyWrapper = styled.div`
  width:100vw;
  height: max-content;
  display:flex;
  justify-content:center;
  
`;

export const Body = styled.div`

width:90vw;
max-width:${props => props.theme.maxBodyWidth};
@media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    width:100vw;
}


`;

export default Body;
