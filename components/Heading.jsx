import styled from "@emotion/styled";
import { RWD, SPACE, COLORS } from "../util/constants";

const Heading = styled("h1")`
  font-family: "Hello Sunshine";
  font-weight: lighter;
  margin: 0 0 ${SPACE}px;
  color: ${COLORS.PRIMARY};
  font-size: 80px;
  text-align: center;

  @media (min-width: ${RWD.TABLET}px) {
    font-size: 160px;
    text-align: ${({ center }) => (center ? "center" : "initial")};
  }
`;

export default Heading;
