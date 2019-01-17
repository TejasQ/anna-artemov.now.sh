import React from "react";
import styled from "@emotion/styled";
import { RWD, COLORS } from "../util/constants";

const Container = styled("div")`
  min-width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color === "primary" ? COLORS.PRIMARY : COLORS.SECONDARY)};
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: ${RWD.TABLET}px) {
    min-width: 200px;
    width: fit-content;
  }
`;

const Button = ({ children, color, style }) => (
  <Container style={style} color={color}>
    {children}
  </Container>
);

export default Button;
