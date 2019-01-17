import styled from "@emotion/styled";
import { SPACE, RWD } from "../util/constants";

const Container = styled("div")`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: ${SPACE}px;

  @media (min-width: ${RWD.TABLET}px) {
    padding: ${SPACE * 2}px;
  }

  @media (min-width: 1040px) {
    padding: 0;
  }
`;

export default Container;
