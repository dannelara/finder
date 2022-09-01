import React, { useState } from "react";
import { Link } from "../../utils";
import { Container, Nav, StyledHeader, SubBig, SubSmall, Ul } from "./Styles";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [toggle, setToggle] = useState(false);

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

          <Container type="burger-menu">
            {toggle ? (
              <RiCloseLine
                color="#D97979"
                size={27}
                onClick={() => setToggle(false)}
              />
            ) : (
              <RiMenu3Line
                color="#D97979"
                size={27}
                onClick={() => setToggle(true)}
              />
            )}

            {toggle && (
              <Container type="burger-menu-links">
                <Link
                  to="/"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/new"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  New Session
                </Link>
                <Link
                  to="/finder"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  Finder
                </Link>
              </Container>
            )}
          </Container>
        </SubSmall>
      </SubBig>
    </StyledHeader>
  );
}
