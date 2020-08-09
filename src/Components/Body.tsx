import styled from "styled-components";


export const BodyWrapper = styled.div`
  display:flex;
  justify-content:center;
`;

export const Body = styled.div`
max-width:${props => props.theme.maxBodyWidth};
`;

export default Body;

