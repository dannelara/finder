import React from "react";
import { Link } from "../../utils";
import { Nav, StyledHeader, SubBig, SubSmall, Ul } from "./Styles";

export default function Header() {
  return (
    <StyledHeader>
      <SubBig>
        <SubSmall>
          <Link to={"/"}>Home</Link>
        </SubSmall>
        <SubSmall>
          <Nav>
            <Ul>
              <Link to={"/"} hover="hover">
                Home
              </Link>
              <Link to={"/new"} hover="hover">
                New Session
              </Link>
              <Link to={"/finder"} hover="hover">
                Finder
              </Link>
            </Ul>
          </Nav>
        </SubSmall>
      </SubBig>
    </StyledHeader>
  );
}
