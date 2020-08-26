import styled from "styled-components";


export const BodyWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
`;

export const Body = styled.div`
width: calc(90vw - 50px);
max-width:${props => props.theme.maxBodyWidth};
`;

export default Body;
