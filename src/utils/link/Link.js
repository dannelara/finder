import React from "react";
import { StyledLink } from "./Styles";
export default function Link({ to, type, children, onClick, hover }) {
  return (
    <StyledLink to={to} type={type} onClick={onClick} hover={hover}>
      {children}
    </StyledLink>
  );
}
