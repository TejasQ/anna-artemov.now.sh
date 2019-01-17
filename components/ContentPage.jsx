import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Container from "./Container";
import Heading from "./Heading";
import { RWD, SPACE } from "../util/constants";
import Header from "./Header";

const Content = styled("div")`
  margin-top: 80px;
  @media (min-width: ${RWD.TABLET}px) {
    margin-top: 92px;
  }
`;

const Columns = styled("div")`
  display: grid;
  grid-gap: ${SPACE}px;

  @media (min-width: ${RWD.TABLET}px) {
    grid-template-columns: 60% auto;
  }
`;

const Column = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentPage = ({ title, children, activePage, columns }) => {
  return (
    <div>
      <Header activePage={activePage} />
      <Content>
        <Container>
          <Heading center={!columns || columns === 1}>{title}</Heading>
          {columns === 2 && <Columns>{children}</Columns>}
          {(!columns || columns === 1) && <Column>{children}</Column>}
        </Container>
      </Content>
    </div>
  );
};

export default ContentPage;
