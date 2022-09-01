import React from "react";
import { StyledHeader, SubBig, SubSmall } from "./Styles";

export default function Header() {
  return (
    <StyledHeader>
      <SubBig>
        <SubSmall>Logo</SubSmall>
        <SubSmall>Links</SubSmall>
      </SubBig>
    </StyledHeader>
  );
}
