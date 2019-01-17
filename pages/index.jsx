import React from "react";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

import Page from "../components/Page";
import Container from "../components/Container";
import NavLinks from "../components/NavLinks";
import { RWD, SPACE, COLORS } from "../util/constants";
import Nav from "../components/Nav";

const PageContainer = styled(Div100vh)({
  display: "flex",
  alignItems: "flex-end",
  marginTop: -64,
  height: "100vh",
  "@media (min-width: ${RWD.TABLET}px)": { alignItems: "center" },
});

const Hero = styled("div")`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  align-items: center;
  justify-content: center;

  @media (min-width: ${RWD.TABLET}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AnnaCutout = styled("img")`
  max-width: 70%;
  margin-right: auto;
  display: block;
  margin-left: auto;

  @media (min-width: ${RWD.TABLET}px) {
    max-width: none;
    margin-right: 0;
  }
`;

const Logo = styled("img")`
  display: block;
  grid-row: 1;
  max-width: 180px;
  margin: 0 auto;
  @media (min-width: ${RWD.TABLET}px) {
    grid-row: auto;
    margin: 0;
    max-width: 320px;
    margin-right: auto;
  }
`;

const NavBar = styled("nav")`
  position: absolute;
  left: 0;
  width: 100vw;
  background-color: ${COLORS.PRIMARY};
  font-size: 11px;

  @media (min-width: ${RWD.BIGGER_PHONE}px) {
    font-size: 14px;
  }
  @media (min-width: ${RWD.TABLET}px) {
    font-size: inherit;
  }
`;

const Main = styled("div")`
  display: none;
  text-align: center;

  @media (min-width: ${RWD.TABLET}px) {
    margin-top: 106px;
    display: block;
  }
`;

const LogosContainer = styled("div")`
  display: none;
  justify-content: center;

  @media (min-height: ${RWD.TABLET}px) {
    display: flex;
  }
`;

const Fineprint = styled("div")`
  display: none;
  color: #747474;
  font-size: 14px;
  margin-bottom: ${SPACE}px;

  @media (min-height: ${RWD.TABLET}px) {
    display: block;
  }
`;

const App = () => (
  <Page>
    <PageContainer>
      <Container style={{ padding: 0 }}>
        <Hero>
          <AnnaCutout alt="Anna Artemov" src="/static/anna.png" />
          <Logo alt="Anna Artemov" src="/static/logo.png" />
        </Hero>
        <NavBar>
          <Container style={{ padding: 0 }}>
            <NavLinks>
              <Nav />
            </NavLinks>
          </Container>
        </NavBar>
        <Main>
          <Fineprint>Diplom Sozialpädagogin | Zertifizerte Coach</Fineprint>
          <LogosContainer>
            <img alt="Anna Artemov" src="/static/badges.png" />
          </LogosContainer>
        </Main>
      </Container>
    </PageContainer>
  </Page>
);

export default App;
