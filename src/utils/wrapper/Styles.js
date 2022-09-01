import styled from "styled-components";

const StyledWrapper = styled.div`
  ${(props) =>
    props.type === "big" && {
      height: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
`;
export default StyledWrapper;
