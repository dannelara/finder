import styled from "styled-components";

export const StyledHeader = styled.div`
  top: 0;
  width: 100%;
  height: 2em;
  display: felx;
  justify-content: start;
  align-items: center;
  padding: 0.1em 0em;
  z-index: 800;
  background-color: ${(props) => props.theme.header.colors.background};
  box-shadow: ${(props) => props.theme.header.colors.boxshadow};
`;
