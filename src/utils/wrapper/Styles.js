import styled from "styled-components";

const StyledWrapper = styled.div`
  ${(props) =>
    props.type === "big" && {
      height: "95%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
`;
export default StyledWrapper;
