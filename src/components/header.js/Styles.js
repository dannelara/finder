import styled from "styled-components";
export const StyledHeader = styled.div`
  top: 0;
  width: 100%;
  height: 10%;
  display: felx;
  justify-content: center;
  align-items: center;
  z-index: 800;
  background-color: ${(props) => props.theme.header.background};
  box-shadow: ${(props) => props.theme.header.boxshadow};
`;

export const Container = styled.div`
  ${(props) =>
    props.type === "burger-menu" && {
      display: "none",
      position: "relative",
      "@media screen and (max-width: 600px)": {
        display: "flex",
      },
    }}

  ${(props) =>
    props.type === "burger-menu-links" && {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexDirection: "column",
      textAlign: "end",
      background: "#fff",
      padding: "2rem",
      position: "absolute",
      right: 0,
      top: "20px",
      marginTop: ".5rem",
      minWidth: "150px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      zIndex: 1000,
    }}
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

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  gap: 10px;
  width: 100%;
`;
