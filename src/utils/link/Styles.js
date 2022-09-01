import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledLink = styled(Link)`
  text-decoration: none;
  border: 0;
  cursor: pointer;
  font-weight: ${(props) => props.theme.fonts.weight};
  color: ${(props) => props.theme.colors.main};
  padding: 0.25em;
  border-radius: 25px;
  ${(props) =>
    props.hover === "hover" && {
      transition: "color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: `inset 150px 0 0 0 ${props.theme.colors.main}`,
        color: "white",
      },
    }}
`;
