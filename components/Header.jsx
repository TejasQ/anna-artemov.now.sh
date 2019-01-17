import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import Container from "./Container";
import NavLinks from "./NavLinks";
import Burger, { BurgerMenu } from "./Burger";
import { RWD, SPACE } from "../util/constants";
import Nav from "./Nav";

const HeaderContainer = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.09), 0 0 100px 20px white inset;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(10px);
`;

const LogoMark = styled("img")`
  display: block;
  margin: 0 auto;

  @media (min-width: ${RWD.TABLET}px) {
    margin: 0 ${SPACE}px 0 0;
  }
`;

const Header = ({ activePage }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isBurgerActive, setBurgerActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > RWD.TABLET) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <Container>
        <NavLinks>
          <Link href="/">
            <LogoMark alt="Anna Artemov" src="/static/logomark.png" />
          </Link>
          {isMobile ? (
            <>
              <Burger style={{ right: 16 }} onClick={() => setBurgerActive(!isBurgerActive)} active={isBurgerActive} />
              <BurgerMenu active={isBurgerActive} offset={65}>
                <Nav light activePage={activePage} />
              </BurgerMenu>
            </>
          ) : (
            <Nav light activePage={activePage} />
          )}
        </NavLinks>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
