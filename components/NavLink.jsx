import styled from "@emotion/styled";
import { COLORS, SPACE, RWD } from "../util/constants";

const NavLink = styled("li")`
  color: ${({ light, active }) => (active ? COLORS.PRIMARY : light ? "inherit" : "white")};
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: ${({ end }) => (end ? "auto" : "initial")};

  > a {
    display: flex;
    align-items: center;
    height: 64px;
    padding: ${SPACE / 2}px;
    width: 100%;

    @media (min-width: ${RWD.TABLET}px) {
      padding: ${SPACE}px;
      width: auto;
    }
  }
  :hover {
    background-color: ${({ light }) => (light ? "#f8f8f8" : COLORS.PRIMARY_DARK)};
  }
`;

export default NavLink;
