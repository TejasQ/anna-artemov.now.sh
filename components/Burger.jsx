import React from "react";
import styled from "@emotion/styled";
import { SPACE } from "../util/constants";

const Container = styled("div")`
  width: ${({ size }) => size || 40}px;
  height: ${({ size }) => size || 40}px;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const Bars = styled("div")`
  height: ${({ width }) => width}px;
  width: 100%;
  background: ${({ active }) => (active ? "white" : "black")};

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 11px;
    height: ${({ width }) => width}px;
    width: 100%;
    background: black;
    transition: transform 0.3s ease;
  }

  ::before {
    transform: ${({ active }) =>
      active ? "translateY(10px) translateY(-10px) rotate(45deg) translateX(8px)" : "none"};
  }

  ::after {
    top: auto;
    bottom: 10px;
    transform: ${({ active }) => (active ? "translateX(6px) translateY(-10px) rotate(-45deg)" : "none")};
  }
`;

const Burger = ({ style, onClick, size, active }) => {
  return (
    <Container onClick={onClick} style={style} size={size}>
      <Bars active={active} width={3} />
    </Container>
  );
};

const MenuContainer = styled("div")`
  position: fixed;
  top: ${({ offset }) => `${offset}px` || 0};
  right: 0;
  width: 90vw;
  background: white;
  height: ${({ offset }) => (offset ? `calc(100vh - ${offset}px)` : "100vh")};
  transition: 0.3s transform ease;
  box-shadow: -20px 10px 20px rgba(0, 0, 0, 0.1);
  transform: ${({ active }) => (active ? "none" : "translateX(100vw)")};
`;

export const BurgerMenu = ({ children, active, offset }) => {
  return (
    <MenuContainer active={active} offset={offset}>
      {children}
    </MenuContainer>
  );
};

export default Burger;
