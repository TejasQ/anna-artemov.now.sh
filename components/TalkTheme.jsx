import React from "react";
import styled from "@emotion/styled";
import Subheading from "./Subheading";
import { RWD, SPACE } from "../util/constants";
import ContactButton from "./ContactButton";

const Container = styled("div")`
  display: flex;
  flex-direction: column-reverse;
  text-align: left;
  padding: ${SPACE}px 0;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: ${RWD.TABLET}px) {
    flex-direction: row;
    :not(:first-child) {
      padding: ${SPACE * 4}px 0;
    }
  }

  :not(:last-child) {
    border-bottom: 1px solid #dfdfdf;
  }

  img {
    flex: 0 1 auto;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;
    @media (min-width: ${RWD.TABLET}px) {
      margin-left: ${SPACE * 2}px;
      max-width: 360px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

const TalkTheme = ({ title, children, picture }) => (
  <Container>
    <div style={{ flex: "1 1 100%" }}>
      <Subheading>{title}</Subheading>
      {children}
      <ContactButton style={{ marginLeft: 0 }}>Jetzt Buchen</ContactButton>
      <br />
    </div>
    <img alt={title} src={picture} />
  </Container>
);

export default TalkTheme;
