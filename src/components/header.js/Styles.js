import styled from "styled-components";

export const StyledHeader = styled.div`
  top: 0;
  width: 100%;
  height: 5%;
  display: felx;
  justify-content: center;
  align-items: center;
  z-index: 800;
  background-color: ${(props) => props.theme.header.colors.background};
  box-shadow: ${(props) => props.theme.header.colors.boxshadow};
`;

export const SubBig = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 95%;
`;

export const SubSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 80%;
`;
